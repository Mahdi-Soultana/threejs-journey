import './style.css';
// console.log('live with vite 🐱‍🏍');
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
// create scene
const scene = new THREE.Scene();

//image

const loadingManager = new THREE.LoadingManager();
loadingManager.onLoad = () => {
  console.log('onLoad');
};
loadingManager.onStart = (url, loaded, total) => {
  console.log('onStart', url, loaded, total);
};
loadingManager.onError = (url) => {
  console.log('onError', url);
};
loadingManager.onProgress = (url, loaded, total) => {
  console.log('onProgress', url, loaded, total);
};

const texture = new THREE.TextureLoader(loadingManager);
const textureColor = texture.load('/textures/door/color.jpg');
const ambientOcclusion = texture.load('/textures/door/ambientOcclusion.jpg');
const height = texture.load('/textures/door/height.jpg');
const metalness = texture.load('/textures/door/metalness.jpg');
const normal = texture.load('/textures/door/normal.jpg');
const roughness = texture.load('/textures/door/height.jpg');
// create a Mesh from geometry and material

const geometry = new THREE.BoxGeometry(1, 1, 1);

const material = new THREE.MeshBasicMaterial({ map: textureColor });

const mesh = new THREE.Mesh(geometry, material);

scene.add(mesh);

//create a size
const size = { width: window.innerWidth, height: window.innerHeight };

//create a camera
const camera = new THREE.PerspectiveCamera(70, size.width / size.height);

const controls = new OrbitControls(camera, document.querySelector('canvas')!);
controls.enableDamping = true;

window.addEventListener('resize', () => {
  size.width = window.innerWidth;
  size.height = window.innerHeight;

  // camera
  camera.aspect = size.width / size.height;
  camera.updateProjectionMatrix();
  //render
  renderer.setSize(size.width, size.height);
});

camera.position.z = 3;
camera.position.x = 1;

scene.add(camera);

//render to canvas

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('canvas') as HTMLCanvasElement,
});

const tick = () => {
  controls.update();
  renderer.setSize(size.width, size.height);
  renderer.render(scene, camera);
  requestAnimationFrame(tick);
};
tick();
