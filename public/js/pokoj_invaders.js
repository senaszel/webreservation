console.log('ok');

import * as THREE from 'https://threejsfundamentals.org/threejs/resources/threejs/r127/build/three.module.js';
import {OrbitControls} from 'https://threejsfundamentals.org/threejs/resources/threejs/r127/examples/jsm/controls/OrbitControls.js';

function main() {
  const canvas = document.querySelector('#bg');
  const scene = new THREE.Scene();

  const fov = 75;
  const aspectRatio = window.innerWidth / window.innerHeight;
  const near = 0.01;
  const far = 1000;
  const camera = new THREE.PerspectiveCamera(fov,aspectRatio,near,far);
  camera.position.z = 3;

  const renderer = new THREE.WebGLRenderer({
    canvas
  });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth,window.innerHeight);

  const controls = new OrbitControls(camera, canvas);
  controls.enableZoom = false;

  const ambientLight = new THREE.AmbientLight(0xffffff);
  scene.add(ambientLight);

  function createDoor() {
    const boxWidth = 70;
    const boxHeight = 110;
    const boxDepth = 1;
    const geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);
    const texture = new THREE.TextureLoader().load(
      'pic/door.jpg'
    );
    const material = new THREE.MeshStandardMaterial({map:texture});
    const door = new THREE.Mesh(geometry,material);
    const door_x = 0;
    const door_y = -12;
    const door_z = 65;
    door.position.set(door_x,door_y,door_z);
    scene.add(door);

  };

  function createSkyBox() {
    const loader = new THREE.CubeTextureLoader();
    const texture = loader.load([
      'box/room_invaders/pos-x.jpg',
      'box/room_invaders/neg-x.jpg',
      'box/room_invaders/pos-y.jpg',
      'box/room_invaders/neg-y.jpg',
      'box/room_invaders/pos-z.jpg',
      'box/room_invaders/neg-z.jpg',
    ]);
    scene.background = texture;
  };

  function resizeRendererToDisplaySize(renderer) {
    const canvas = renderer.domElement;
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    const needResize = canvas.width !== width || canvas.height !== height;
    if (needResize) {
      renderer.setSize(width, height, false);
    }
    return needResize;
  };

  function render(time) {
    time *= 0.001;

    if (resizeRendererToDisplaySize(renderer)) {
      const canvas = renderer.domElement;
      camera.aspect = canvas.clientWidth / canvas.clientHeight;
      camera.updateProjectionMatrix();
    }

    renderer.render(scene, camera);

    requestAnimationFrame(render);
  }


  createSkyBox();
  createDoor();
  requestAnimationFrame(render);
}

main();
