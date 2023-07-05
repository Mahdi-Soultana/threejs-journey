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
const size = { width: window.innerWidth, height: window.innerHeight };

//create a camera
const camera = new THREE.PerspectiveCamera(70, size.width / size.height);
camera.position.z = 3;

window.addEventListener('resize', () => {
  size.width = window.innerWidth;
  size.height = window.innerHeight;

  // camera
  camera.aspect = size.width / size.height;
  camera.updateProjectionMatrix();
  //render
  renderer.setSize(size.width, size.height);
});
// --------------
window.addEventListener('dblclick', () => {
  console.log(document.fullscreenElement);
  if (!document.fullscreenElement) {
    document.querySelector('canvas')!.requestFullscreen();
  } else {
    document.exitFullscreen();
  }
});

const orbitControls = new OrbitControls(
  camera,
  document.querySelector('canvas')!,
);

// orbitControls.target.y = 2;

scene.add(camera);

//render to canvas

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('canvas') as HTMLCanvasElement,
});

renderer.setSize(size.width, size.height);

const tick = () => {
  orbitControls.update();

  renderer.render(scene, camera);
  requestAnimationFrame(tick);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
};
tick();
console.log('from example');
