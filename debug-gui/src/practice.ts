import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import GUI from 'lil-gui';

import gsap from 'gsap';

const gui = new GUI({ title: 'Hello Mahdi 👋' });
const parameters = {
  anime,
  color: '#fff',
};
const materialCube = new THREE.MeshBasicMaterial({ color: parameters.color });
const size = { width: window.innerWidth, height: window.innerHeight };
const canvas = document.querySelector('canvas')!;
const cube = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), materialCube);

const group = new THREE.Group();
const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(70, size.width / size.height);
const controls = new OrbitControls(camera, canvas);

const renderer = new THREE.WebGLRenderer({
  canvas,
});
renderer.setSize(size.width, size.height);

function anime() {
  gsap.to(cube.position, {
    keyframes: {
      x: [0, 3, 3, 0, 0],
      y: [0, 0, 3, 3, 0],
      ease: 'power2.out',
    },
    duration: 2,
  });
  //   gsap.to(cube.rotation, { y: cube.rotation.y + Math.PI * 2 });
}

function tick() {
  controls.update();
  renderer.render(scene, camera);
  requestAnimationFrame(tick);
}
// debug
const positionDebug = gui.addFolder('positionDebug');
positionDebug.close();
positionDebug.add(cube.position, 'z').min(-3).max(3).step(0.01).name('cube z ');
positionDebug.add(cube.position, 'y').min(-3).max(3).step(0.01).name('cube Y ');
positionDebug.add(cube.position, 'x').min(-3).max(3).step(0.01).name('cube X ');
const scaleDebug = gui.addFolder('scaleDebug');
scaleDebug.close();
scaleDebug.add(cube.scale, 'z').min(0.5).max(3).step(0.01).name('scale Z');
scaleDebug.add(cube.scale, 'x').min(0.5).max(3).step(0.01).name('scale X');
scaleDebug.add(cube.scale, 'y').min(0.5).max(3).step(0.01).name('scale y');
const units = gui.addFolder('units');
units.close();
units.add(cube, 'visible').name('display ');
units
  .addColor(parameters, 'color')
  .onChange(() => materialCube.color.set(parameters.color));

units.add(materialCube, 'wireframe');
units.add(parameters, 'anime');

//
controls.enableDamping = true;
controls.maxDistance = 10;
controls.minDistance = 1;
group.add(cube);
scene.add(group);

camera.position.z = 6;

// make it responsive
window.addEventListener('resize', () => {
  size.width = window.innerWidth;
  size.height = window.innerHeight;
  camera.aspect = size.width / size.height;
  camera.updateProjectionMatrix();
  renderer.setSize(size.width, size.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

//
tick();
