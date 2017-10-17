var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

window.addEventListener('resize', function(){
  var width = window.innerWidth;
  var height = window.innerHeight;
  renderer.setSize(width, height);
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
});

controls = new THREE.OrbitControls(camera, renderer.domElement);

// Geometría
// var geometry = new THREE.BoxGeometry(1,1,1);

// Modelo
var loader = new THREE.JSONLoader();
loader.load('model/cari.json', handle_load);

function handle_load(geometry, materials){
  var material = new THREE.MeshNormalMaterial();
  var mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh);
  mesh.position.z = -10;
}

// Material
// var material = new THREE.MeshBasicMaterial({color: 0xffffff, wireframe: true});
// var cube = new THREE.Mesh(geometry, material);
// scene.add(cube);

camera.position.z = 3;

var update = function(){
  // cube.rotation.x += 0.01;
  // cube.rotation.y += 0.005;
};

var render = function(){
  renderer.render(scene, camera);
};

var GameLoop = function(){
  requestAnimationFrame(GameLoop);

  update();
  render();
};

GameLoop();
