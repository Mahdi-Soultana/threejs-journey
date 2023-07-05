import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

const clock = new THREE.Clock();
const size = {
  width: window.innerWidth,
  height: window.innerHeight,
};
const scene = new THREE.Scene();
const canvas = document.querySelector('canvas')!;
const camera = new THREE.PerspectiveCamera(60, size.width / size.height);
const controls = new OrbitControls(camera, canvas);

camera.position.z = -10;
controls.enableDamping = true;

//object
const loaderManager = new THREE.LoadingManager();

let progress = '0%';
loaderManager.onProgress = (url, loaded, total) => {
  progress = `-------    ${100 * (loaded / total)}%      🔃------`;
  console.log(progress);
};

const texture = new THREE.TextureLoader(loaderManager);

const alphaTexture = texture.load('/textures/door/alpha.jpg');
const heightTexture = texture.load('/textures/door/height.jpg');
const metalnessTexture = texture.load('/textures/door/metalness.jpg');
const roughnessTexture = texture.load('/textures/door/roughness.jpg');
const normalTexture = texture.load('/textures/door/normal.jpg');
const colorTexture = texture.load('/textures/door/color.jpg');
const ambientOcclusionTexture = texture.load(
  '/textures/door/ambientOcclusion.jpg',
);

const material = new THREE.MeshBasicMaterial({
  // wireframe: true,
  map: colorTexture,
});

const Sphere = new THREE.Mesh(new THREE.SphereGeometry(1, 10, 10), material);
const Torus = new THREE.Mesh(new THREE.TorusGeometry(1, 0.3, 10), material);
const Cylinder = new THREE.Mesh(
  new THREE.CylinderGeometry(1, 0.4, 2),
  material,
);
Torus.position.x = 5;
Cylinder.position.x = -5;

//

scene.add(Sphere, Cylinder, Torus);
scene.add(camera);

const renderer = new THREE.WebGL1Renderer({
  canvas,
});
function render() {
  const elapsedTime = clock.getElapsedTime();
  //
  Sphere.rotation.y = 0.1 * elapsedTime;
  Torus.rotation.y = 0.1 * elapsedTime;
  Cylinder.rotation.y = 0.1 * elapsedTime;

  Sphere.rotation.x = 0.15 * elapsedTime;
  Torus.rotation.x = 0.15 * elapsedTime;
  Cylinder.rotation.x = 0.15 * elapsedTime;

  //
  controls.update();
  renderer.setSize(size.width, size.height);
  renderer.render(scene, camera);
  requestAnimationFrame(render);
}
render();
