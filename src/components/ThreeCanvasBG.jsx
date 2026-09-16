import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function ThreeCanvasBG() {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 15;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mount.appendChild(renderer.domElement);

    // Floating 3D Objects
    const objects = [];

    // 1. Interactive 3D Cube (Ledger Block)
    const cubeGeo = new THREE.BoxGeometry(2.5, 2.5, 2.5);
    const cubeMat = new THREE.MeshStandardMaterial({
      color: 0x2563EB,
      roughness: 0.3,
      metalness: 0.7,
      transparent: true,
      opacity: 0.85
    });
    const cube = new THREE.Mesh(cubeGeo, cubeMat);
    cube.position.set(-8, 3, -2);
    scene.add(cube);
    objects.push({ mesh: cube, rx: 0.005, ry: 0.008, speedY: 0.002, origY: 3 });

    // 2. Glowing Ring (Tally/Software Cycle)
    const torusGeo = new THREE.TorusGeometry(2, 0.4, 16, 100);
    const torusMat = new THREE.MeshStandardMaterial({
      color: 0x0284C7,
      roughness: 0.2,
      metalness: 0.8,
      wireframe: true
    });
    const torus = new THREE.Mesh(torusGeo, torusMat);
    torus.position.set(9, -2, -3);
    scene.add(torus);
    objects.push({ mesh: torus, rx: 0.008, ry: 0.01, speedY: 0.003, origY: -2 });

    // 3. Gold Sphere (Coins/Receivables)
    const sphereGeo = new THREE.IcosahedronGeometry(1.5, 2);
    const sphereMat = new THREE.MeshStandardMaterial({
      color: 0xF59E0B,
      roughness: 0.25,
      metalness: 0.85
    });
    const sphere = new THREE.Mesh(sphereGeo, sphereMat);
    sphere.position.set(-6, -4, -1);
    scene.add(sphere);
    objects.push({ mesh: sphere, rx: 0.004, ry: 0.006, speedY: 0.002, origY: -4 });

    // 4. Diamond Prism (Certificate/Excellence)
    const octGeo = new THREE.OctahedronGeometry(1.8);
    const octMat = new THREE.MeshStandardMaterial({
      color: 0x10B981,
      roughness: 0.2,
      metalness: 0.8,
      wireframe: true
    });
    const octahedron = new THREE.Mesh(octGeo, octMat);
    octahedron.position.set(7, 4, -4);
    scene.add(octahedron);
    objects.push({ mesh: octahedron, rx: 0.01, ry: 0.005, speedY: 0.002, origY: 4 });

    // Particle Stars/Dust
    const particleCount = 120;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 40;
      positions[i + 1] = (Math.random() - 0.5) * 40;
      positions[i + 2] = (Math.random() - 0.5) * 30;

      // Soft blue/cyan tones for light theme
      colors[i] = 0.15;
      colors[i + 1] = 0.45 + Math.random() * 0.3;
      colors[i + 2] = 0.95;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const particleMat = new THREE.PointsMaterial({
      size: 0.18,
      vertexColors: true,
      transparent: true,
      opacity: 0.45
    });

    const particles = new THREE.Points(geometry, particleMat);
    scene.add(particles);

    // Lights for crisp white studio look
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0x2563eb, 2.5);
    dirLight1.position.set(5, 10, 7);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0xf59e0b, 1.8);
    dirLight2.position.set(-5, -10, -5);
    scene.add(dirLight2);

    // Mouse Parallax Interaction
    let mouseX = 0;
    let mouseY = 0;
    const handleMouseMove = (e) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Resize Listener
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationFrameId;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Rotate and float objects
      objects.forEach((item) => {
        item.mesh.rotation.x += item.rx;
        item.mesh.rotation.y += item.ry;
        item.mesh.position.y = item.origY + Math.sin(elapsedTime * 1.5 + item.origY) * 0.4;
      });

      // Rotate particle field slowly
      particles.rotation.y = elapsedTime * 0.03;
      particles.rotation.x = elapsedTime * 0.015;

      // Parallax camera easing
      camera.position.x += (mouseX * 2 - camera.position.x) * 0.03;
      camera.position.y += (-mouseY * 2 - camera.position.y) * 0.03;
      camera.lookAt(scene.position);

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 0
      }}
    />
  );
}
