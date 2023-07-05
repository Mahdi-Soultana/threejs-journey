import { gsap } from 'gsap';
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
// camera.position.x = 1;

scene.add(camera);

//render to canvas

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('canvas') as HTMLCanvasElement,
});

renderer.setSize(size.width, size.height);

// gsap.to(mesh.position, { y: -2, duration: 12 });
// gsap.to(mesh.position, { y: 1, duration: 2 });

function tick() {
  renderer.render(scene, camera);
  window.requestAnimationFrame(tick);
}

tick();

console.log('from example');
