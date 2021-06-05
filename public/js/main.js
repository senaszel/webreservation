console.log('log ok');
//window.alert("alert ok");

import * as THREE from 'https://cdn.skypack.dev/three@';

const canvas = document.querySelector('#bg');
const scene = new THREE.Scene();

const fov = 75;
const aspectRatio = window.innerWidth / window.innerHeight;
const near = 0.01;
const far = 1000;
const camera = new THREE.PerspectiveCamera(fov,aspectRatio,near,far);
camera.position.z = 3;

const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth,window.innerHeight);

renderer.render(scene,camera);

const value = getRandom()*6;
const geometry = new THREE.BoxGeometry(value,value,value);
const material = new THREE.MeshStandardMaterial({color:0xFF6347});
const bigPixel = new THREE.Mesh(geometry,material);
bigPixel.position.set(0,0,0);
scene.add(bigPixel);

const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(20,20,20);
scene.add(pointLight);

const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(ambientLight);



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

{
  const loader = new THREE.TextureLoader()
  const texture = loader.load('pic/pixel_space.jpeg');
  scene.background = texture;
}

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

  renderer.render(scene,camera);
};

animate();
