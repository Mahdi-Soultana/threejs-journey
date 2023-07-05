// import './example';
import './style.css';

import * as THREE from 'three';
import gsap from 'gsap';
// mesh ->material and geometry
const scene = new THREE.Scene();
const group = new THREE.Group();
const mesh = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 'red' }),
);

group.add(mesh);

group.position.z = -3;

scene.add(group);

const size = { width: 700, height: 500 };
//camera
const camera = new THREE.PerspectiveCamera(70, size.width / size.height);

scene.add(camera);

const clock = new THREE.Clock();

//renderer
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('canvas')!,
});

renderer.setSize(size.width, size.height);

const tick = () => {
  //   console.log('tick');

  camera.lookAt(group.position);
  gsap.to(
    camera.position,

    {
      x: Math.sin(clock.getElapsedTime()),
      y: Math.sin(clock.getElapsedTime()),
      repeat: -1,
      duration: 2,
    },
  );
  renderer.render(scene, camera);
  requestAnimationFrame(tick);
};

tick();
