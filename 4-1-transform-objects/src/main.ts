// import './example';
import './style.css';

import * as THREE from 'three';

//mesh
const group1 = new THREE.Group();
const cubeMaterial = new THREE.MeshBasicMaterial({ color: 'green' });
const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);

// cube2

const cube2 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 'red' }),
);

cube2.position.set(2, 0, 0);
// cube.position.set(4, 0, 0);

//cube3

const cube3 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 'yellow' }),
);

cube3.position.set(-2, 0, 0);

const axesHelper = new THREE.AxesHelper();
const axesHelper2 = new THREE.AxesHelper();
const axesHelper3 = new THREE.AxesHelper();

group1.add(cube, cube2, cube3);

cube.add(axesHelper);
cube2.add(axesHelper2);
cube3.add(axesHelper3);

const scene = new THREE.Scene();

scene.add(group1);

const size = {
  width: 800,
  height: 600,
};
const camera = new THREE.PerspectiveCamera(70, size.width / size.height);

scene.add(camera);

camera.lookAt(group1.position);

camera.position.z = 3;
// camera.position.x = 1;
// camera.position.y = 1;
// camera.rotation.x = -0.4;

group1.position.y = -0.1;
group1.scale.y = 0.2;
group1.scale.x = 0.2;

// group1.rotation.x = Math.PI / 2;

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('canvas')!,
});
renderer.setSize(size.width, size.height);

renderer.render(scene, camera);
