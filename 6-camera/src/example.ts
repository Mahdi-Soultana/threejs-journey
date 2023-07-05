import './style.css';
// console.log('live with vite 🐱‍🏍');
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
// create scene
const scene = new THREE.Scene();

// create a Mesh from geometry and material

const geometry = new THREE.BoxGeometry(1, 1, 1);

const material = new THREE.MeshBasicMaterial({ color: 'red' });

const mesh = new THREE.Mesh(geometry, material);

scene.add(mesh);

//create a size
const size = { width: 700, height: 500 };
const mouse = { x: 0, y: 0 };
window.addEventListener('mousemove', (e) => {
  mouse.x = e.clientX / size.width - 0.5;
  mouse.y = e.clientY / size.height - 0.5;
});

//create a camera
const camera = new THREE.PerspectiveCamera(70, size.width / size.height);

camera.position.z = 3;
// camera.position.x = 1;

scene.add(camera);

const orbit = new OrbitControls(camera, document.querySelector('canvas')!);

orbit.target.y = 1;

// orbit.autoRotate = true;

orbit.enableDamping = true;

//render to canvas

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('canvas') as HTMLCanvasElement,
});

renderer.setSize(size.width, size.height);
// const clock = new THREE.Clock();

function tick() {
  // mesh.rotation.y = Math.sin(clock.getElapsedTime());
  orbit.update();
  // camera.position.y = -mouse.y * 3;
  // camera.position.x = -mouse.x * 3;
  // mesh.rotation.y = mouse.x * 3;
  // mesh.rotation.x = mouse.y * 3;
  // camera.lookAt(mesh.position);
  // ------------------
  renderer.render(scene, camera);
  requestAnimationFrame(tick);
}
tick();
