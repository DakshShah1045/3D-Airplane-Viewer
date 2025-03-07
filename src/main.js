console.log("Working");
import * as THREE from "three";

import { OrbitControls } from "three/addons/controls/OrbitControls.js"; // ✅ CORRECT



import { EXRLoader } from 'three/examples/jsm/loaders/EXRLoader.js';

import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader.js';





const scene = new THREE.Scene()

const loader = new THREE.CubeTextureLoader();
const texture = loader.load([
     'px.png', 'nx.png',  // Positive/Negative X
    'py.png',  'ny.png',  // Positive/Negative Y
    'pz.png', 'nz.png'   // Positive/Negative Z
]);
texture.mapping = THREE.CubeReflectionMapping;


scene.background = texture;
scene.environment = texture;




const aspectRatio = window.innerWidth / window.innerHeight
const camera = new THREE.PerspectiveCamera(35, window.innerWidth/ window.innerHeight , 0.1 , 600)

/*const cubeGeometry = new THREE.BoxGeometry(1,1,1)
const cubeMaterial = new THREE.MeshBasicMaterial({color : 'blue'})
const cubeMesh = new THREE.Mesh(cubeGeometry , cubeMaterial)
scene.add(cubeMesh)*/



const mtlLoader = new MTLLoader();
mtlLoader.load('/3D-Airplane-Viewer/Airplane/air-model.mtl', function (materials) {
    materials.preload();
    const objLoader = new OBJLoader();
    objLoader.setMaterials(materials);
    objLoader.load('/3D-Airplane-Viewer/Airplane/airplane.obj', function (object) {
        console.log(object)
        object.scale.set(0.01, 0.01, 0.01); // Adjust scale
    object.position.set(0, 0, 0);  
    if(window.innerWidth < 450){
        object.scale.set(0.005, 0.005, 0.005)
    }
        scene.add(object);
        console.log(scene)
    }); 
});



//edgeLines.position.y = 1
camera.position.set(0,5,50)

const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(5, 5, 5);
scene.add(light);

const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);




const canvas = document.querySelector('.three-js')
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
  antialias : true
})

console.log(window.devicePixelRatio)
renderer.setPixelRatio(Math.min(window.devicePixelRatio , 2))
//renderer.outputEncoding = THREE.sRGBEncoding;
//renderer.toneMapping = THREE.ACESFilmicToneMapping; // More realistic lighting
//renderer.toneMappingExposure = 0.2; 

    renderer.setSize(window.innerWidth , window.innerHeight)
const controls = new OrbitControls( camera, canvas );
controls.enableDamping = true
//controls.autoRotate = true

window.addEventListener("resize" , ()=>{
renderer.setSize(window.innerWidth , window.innerHeight)
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
})



const renderLoop = ()=>{


 

  controls.update()
  renderer.render(scene, camera);

  window.requestAnimationFrame(renderLoop)

}

renderLoop()














                       
