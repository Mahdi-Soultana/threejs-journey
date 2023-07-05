// import './example';
import './style.css';

import * as THREE from 'three';

// group

const group = new THREE.Group();

// objects

const cube1 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 'green' }),
);
cube1.position.x = 1.5;
// group.add(cube1);
const cube2 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 'yellow' }),
);
// group.add(cube2);

const cube3 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 'red' }),
);
group.add(cube1, cube2, cube3);

cube3.position.x = -1.5;

// group.position.y = -1;
// group.scale.y = 0.1;
group.rotateX(20);
//camera
const size = { width: 600, height: 500 };
const camera = new THREE.PerspectiveCamera(75, size.width / size.height);
camera.position.z = 3;
//render

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('canvas')!,
});

renderer.setSize(size.width, size.height);

renderer.render(group, camera);
