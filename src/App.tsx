import './App.css'
import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

function App() {

  const containerRef = useRef<HTMLDivElement>(null);
   
  // This is a simple React component that uses Three.js to render a 3D model of a car
  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);

    if (containerRef.current) {
      containerRef.current.appendChild(renderer.domElement);
    }

    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(5, 5, 5).normalize();
    scene.add(light);

    // Loads the car model
    const loader = new GLTFLoader();
    let model: THREE.Object3D;

    loader.load( '/models/scene.gltf', function ( gltf ) {

      model = gltf.scene;
      scene.add( gltf.scene );

    }, undefined, function ( error ) {

      console.error( error );

    } );

    //Adjust the camera position
    camera.position.z = 4.75;
    camera.position.y = 2;
    camera.rotateX(-0.25);
      const animate = () => {
    requestAnimationFrame(animate);

    //Adjust rotation
    if (model) {
      model.rotation.y += 0.01;
    }

    renderer.render(scene, camera);
  };

  animate();

    return () => {
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <>
      <div className='video-container'>
        <video autoPlay loop muted className='background-space'>
          <source src="/videos/space.mp4"></source>
        </video>
      </div>
      <div ref={containerRef} className="threejs-container" />   
    </>
  )
}

export default App
