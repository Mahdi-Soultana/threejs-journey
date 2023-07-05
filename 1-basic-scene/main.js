console.log(THREE);

const scene = new THREE.Scene();

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 'red' });

const mesh = new THREE.Mesh(geometry, material);

const size = { width: 700, height: 500 };

const camera = new THREE.PerspectiveCamera(75, size.width / size.height);
//we need to change the center of position of the camera to view the box
camera.position.z = 3;
camera.position.x = 1;

scene.add(camera);
scene.add(mesh);

// render

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('canvas'),
});
renderer.setSize(size.width, size.height);
renderer.render(scene, camera);

// to create first scene you need to remember:
//0-we need to create and scene that will have object(Mesh) and camera
// we need to create a real object to see that called <Mesh>
//1-Mesh compose from 1-1) geometry and 1-2) color
//2-after we need a camera
//3- we need to add the Mesh and Camera to the scene
//4- we need to render or draw with ThreeWebgl the scene and the camera
