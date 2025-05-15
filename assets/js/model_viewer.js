// assets/js/model-viewer.js
import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.152.2/build/three.module.js';
import { GLTFLoader } from 'https://cdn.jsdelivr.net/npm/three@0.152.2/examples/jsm/loaders/GLTFLoader.js';


const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, viewer.offsetWidth / viewer.offsetHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true });
const viewer = document.getElementById('viewer');

renderer.setSize(viewer.offsetWidth, viewer.offsetHeight);
viewer.appendChild(renderer.domElement);

// Lighting
const light = new THREE.HemisphereLight(0xffffff, 0x444444, 1);
scene.add(light);

// Load the GLB model
const loader = new THREE.GLTFLoader();
loader.load('assets/models/hand_model.glb', function (gltf) {
    scene.add(gltf.scene);
}, undefined, function (error) {
    console.error(error);
});

camera.position.z = 2;

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate();
