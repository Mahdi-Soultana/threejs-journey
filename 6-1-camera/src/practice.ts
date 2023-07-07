import * as THREE from 'three';
import gsap from 'gsap';

const canvas = document.querySelector('canvas')!;

function cubeFn({ gap = 1.5, color = 'red' }) {
  //   const gap = 1.5;
  const cube = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color }),
  );

  return {
    generateCubes: (index: number, arr: number[]) => {
      const half = Math.floor(arr.length / 2);
      const paramPosition = index - half;

      return { cube, position: paramPosition * gap };
    },
  };
}

const cubes1 = new Array(50).fill(10).map((_, index, arr) => {
  const [r, g, b] = [1, 2, 3].map(() => Math.floor(Math.random() * 256));
  const { cube } = cubeFn({
    gap: 1.5,
    color: `rgb(${r},${g},${b})`,
  }).generateCubes(index, arr);
  return cube;
});
const group = new THREE.Group();
const scene = new THREE.Scene();

group.add(...cubes1);

scene.add(group);

//
const size = { width: 800, height: 600 };

const camera = new THREE.PerspectiveCamera(
  70,
  size.width / size.height,
  0.1,
  100,
);
camera.position.z = 10;
scene.add(camera);

const cursor = { x: 0, y: 0 };

canvas.addEventListener('mousemove', (e) => {
  cursor.x = e.clientX / size.width - 0.5;
  cursor.y = e.clientY / size.height - 0.5;
  //
});

//

const renderer = new THREE.WebGLRenderer({
  canvas,
});

renderer.setSize(size.width, size.height);

const tick = () => {
  //   const elapsedTime = clock.getElapsedTime();
  cubes1.forEach((cube, index) => {
    gsap.to(cube.position, {
      x: cursor.x * 20,
      y: -cursor.y * 20,
      //   stagger: 2,
      duration: index * 0.2,
    });
    cube.lookAt(camera.position);
  });

  renderer.render(scene, camera);

  requestAnimationFrame(tick);
};
tick();
