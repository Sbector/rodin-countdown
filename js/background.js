var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
// var helper = new THREE.CameraHelper( camera );
// scene.add( helper );

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

// Controls
controls = new THREE.OrbitControls(camera, renderer.domElement);

// Modelo
var loader = new THREE.JSONLoader();
loader.load('model/cari.json', handle_load);

function handle_load(geometry, materials){
  var material = new THREE.MeshNormalMaterial();
  var mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh);
  mesh.position.y = -5;
}

// Camera Position
camera.position.z = 15;

var update = function(){

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
