console.log('log ok');
//window.alert("alert ok");

import * as THREE from 'https://cdn.skypack.dev/three@';
import { OrbitControls } from 'https://cdn.skypack.dev/three@/examples/jsm/controls/OrbitControls.js';

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75,window.innerWidth / window.innerHeight,0.1,1000);

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
});

renderer.setPixelRatio( window.devicePixelRatio);
renderer.setSize(window.innerWidth,window.innerHeight);

camera.position.setX(20);
camera.position.setZ(60);

renderer.render(scene,camera);
const value = getRandom()*6;
const geometry = new THREE.BoxGeometry(value,value,value);
//const material = new THREE.MeshBasicMaterial({color:0xFF6347,wireframe:true});
const material = new THREE.MeshStandardMaterial({color:0xFF6347});
const bigPixel = new THREE.Mesh(geometry,material);
bigPixel.position.set(0,0,0);
scene.add(bigPixel);

const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(20,20,20);

scene.add(pointLight);

const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(ambientLight);

// const lightHelper = new THREE.PointLightHelper(pointLight);
// const gridHelper = new THREE.GridHelper(200,50);
// scene.add(lightHelper,gridHelper);

//const controls = new OrbitControls(camera,renderer.domElement);



function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};

function getRandom() {
   return getRandomInt(25,225)/100;
 };

function randomColor() {
    const colors = ['red','blue','green','orange','pink','purple','yellow'];
    return colors[Math.floor(Math.random() * colors.length)];
};

function addFloatingPixel() {
  const geometry = new THREE.BoxGeometry(getRandom(),getRandom(),getRandom());
  const material = new THREE.MeshStandardMaterial();
  const pixel = new THREE.Mesh( geometry,material);

  const [x,y,z] = Array(3).fill().map(()=>THREE.MathUtils.randFloatSpread(100));

  pixel.position.set(x,y,z);
  pixel.material.color.set(randomColor());
  scene.add(pixel);
};

Array(200).fill().forEach(addFloatingPixel);

const spaceTexture = new THREE.TextureLoader().load('pic/pixel_space.jpeg');
scene.background = spaceTexture;

function moveCamera() {

  const t = document.body.getBoundingClientRect().top;

  camera.position.z = t * -0.01;
  camera.position.x = t * -0.0002;
  camera.rotation.y = t * -0.0002;
};

document.body.onscroll = moveCamera;
moveCamera();

function animate(){
  requestAnimationFrame(animate);

  bigPixel.rotation.x += 0.01;
  bigPixel.rotation.y += 0.005;
  bigPixel.rotation.z += 0.01;

  // bigPixel.material.color.set(randomColor());
//  controls.update();

  renderer.render(scene,camera);
};

animate();
