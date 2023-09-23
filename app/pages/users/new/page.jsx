"use client";
import React, { useRef, useEffect } from "react";
import * as THREE from "three";

const NewUserPage = () => {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  const renderer = new THREE.WebGLRenderer();

  const cube = new THREE.Mesh(
    new THREE.BoxGeometry(),
    new THREE.MeshBasicMaterial({ color: 0x00ff00 })
  );

  const animate = () => {
    requestAnimationFrame(animate);

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render(scene, camera);
  };

  const mount = useRef(null);

  useEffect(() => {
    mount.current.appendChild(renderer.domElement);
    camera.position.z = 5;

    scene.add(cube);

    animate();
  }, [cube, renderer, scene, camera]);

  return <div ref={mount}></div>;
};

export default NewUserPage;
