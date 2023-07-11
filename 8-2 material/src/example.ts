import './style.css';
// console.log('live with vite 🐱‍🏍');
import * as THREE from 'three';

// create scene
const scene = new THREE.Scene();

// create a Mesh from geometry and material

const geometry = new THREE.BoxGeometry(1, 1, 1);

const material = new THREE.MeshBasicMaterial({ color: 'red' });

const mesh = new THREE.Mesh(geometry, material);

scene.add(mesh);

//create a size
const size = { width: 700, height: 500 };

//create a camera
const camera = new THREE.PerspectiveCamera(70, size.width / size.height);

camera.position.z = 3;
camera.position.x = 1;

scene.add(camera);

//render to canvas

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('canvas') as HTMLCanvasElement,
});
// Start of the code
THREE.ColorManagement.enabled = false;

// After instantiating the renderer
renderer.outputColorSpace = THREE.LinearSRGBColorSpace;

renderer.setSize(size.width, size.height);
renderer.render(scene, camera);

console.log('from example');
