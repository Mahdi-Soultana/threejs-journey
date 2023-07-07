import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const canvas = document.querySelector('canvas')!;
const size = { width: window.innerWidth, height: window.innerHeight };
const cube = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 'red' }),
);

const group = new THREE.Group();
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(70, size.width / size.height);
const control = new OrbitControls(camera, canvas);

const renderer = new THREE.WebGLRenderer({
  canvas,
});
renderer.setSize(size.width, size.height);

function tick() {
  control.update();
  renderer.render(scene, camera);
  requestAnimationFrame(tick);
}
//

control.enableDamping = true;
control.maxDistance = 10;
control.minDistance = 1;

camera.position.z = 3;

group.add(cube);
scene.add(group);

window.addEventListener('resize', () => {
  size.width = window.innerWidth;
  size.height = window.innerHeight;
  camera.aspect = size.width / size.height;
  camera.updateProjectionMatrix();
  renderer.setSize(size.width, size.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});
canvas.addEventListener('dblclick', () => {
  if (!document.fullscreenElement) {
    canvas.requestFullscreen();
  } else {
    document.exitFullscreen();
  }
});

tick();
