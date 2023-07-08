import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { createDebugXYZ } from './utils';

const canvas = document.querySelector('canvas')!;
const size = {
  width: window.innerWidth,
  height: window.innerHeight,
};

const loadingManager = new THREE.LoadingManager();
const textureLoader = new THREE.TextureLoader(loadingManager);
const color = textureLoader.load('/textures/door/color.jpg');

const cube = new THREE.Mesh(
  new THREE.BoxGeometry(),
  new THREE.MeshBasicMaterial({ map: color }),
);

createDebugXYZ({ folderName: 'size', property: cube.scale });
createDebugXYZ({ folderName: 'position', property: cube.position });
createDebugXYZ({ folderName: 'rotation', property: cube.rotation });

const group = new THREE.Group();
const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(70, size.width / size.height);
const controls = new OrbitControls(camera, canvas);
const renderer = new THREE.WebGLRenderer({
  canvas,
});
function tick() {
  controls.update();
  renderer.render(scene, camera);
  requestAnimationFrame(tick);
}

group.add(cube);
scene.add(group);
scene.add(camera);
controls.enableDamping = true;
controls.maxDistance = 20;
controls.minDistance = 2;
camera.position.z = 3;

// make it responsive
window.addEventListener('resize', () => {
  size.width = window.innerWidth;
  size.height = window.innerHeight;

  camera.aspect = size.width / size.height;
  camera.updateProjectionMatrix();

  renderer.setSize(size.width, size.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

renderer.setSize(size.width, size.height);

tick();
