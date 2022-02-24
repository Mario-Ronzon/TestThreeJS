const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 )
const renderer = new THREE.WebGLRenderer({ antialias: true})

renderer.setSize( window.innerWidth, window.innerHeight )
document.body.appendChild( renderer.domElement )

var geometry = new THREE.SphereGeometry( 1, 32, 16)
var material = new THREE.MeshStandardMaterial( { color: 0x0dc4ff })
var cube = new THREE.Mesh ( geometry, material )

var geometry2 = new THREE.BoxGeometry( 2, 3, 2)
var material2 = new THREE.MeshBasicMaterial( {
 color: "#ffb1ef", wireframe: true, transparent: true})
var wireframeCube = new THREE.Mesh ( geometry2, material2 )
scene.add( wireframeCube )

scene.add( cube )
renderer.render( scene, camera )
camera.position.z = 5

var ambientLight = new THREE.AmbientLight ( 0xffffff, 0.5)
scene.add( ambientLight )

var pointLight = new THREE.PointLight( 0xffffff, 1 );
pointLight.position.set( 25, 50, 25 );
scene.add( pointLight );

function animate() {
    requestAnimationFrame( animate )
    cube.rotation.x += 0.04;
    cube.rotation.y += 0.00;
    wireframeCube.rotation.x -= 0.01;
    wireframeCube.rotation.y -= 0.1;
    renderer.render( scene, camera )
}

animate()