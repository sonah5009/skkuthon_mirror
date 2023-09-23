"use client";
import { useEffect } from "react";

import * as THREE from "three";
// import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
// import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
// import { VOXLoader } from 'three/examples/jsm/loaders/VOXLoader';
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

import SceneInit from "../lib/SceneInit";

const Body3dModel = () => {
  useEffect(() => {
    const test = new SceneInit("myThreeJsCanvas");
    test.initialize();
    test.animate();

    // const boxGeometry = new THREE.BoxGeometry(8, 8, 8);
    // const boxMaterial = new THREE.MeshNormalMaterial();
    // const boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);
    // test.scene.add(boxMesh);

    let loadedModel;
    // const glftLoader = new OBJLoader();
    const glftLoader = new GLTFLoader();
    glftLoader.load(
      "assets/base_body/scene.gltf",
      // "assets/base_body/scene.obj",
      // "assets/male_body_base_mesh_highpoly/scene.gltf",
      (gltfScene) => {
        loadedModel = gltfScene;
        console.log(loadedModel);

        gltfScene.scene.rotation.y = Math.PI / 8; // 약간 오른쪽 바라보도록 안 하면 그냥 정면
        gltfScene.scene.position.y = 3;
        // gltfScene.scene.scale.set(3, 3, 3); // 캐릭터 크기
        gltfScene.scene.scale.set(10, 10, 10);
        test.scene.add(gltfScene.scene);
      }
    );

    const animate = () => {
      if (loadedModel) {
        // loadedModel.scene.rotation.x += 0.01;
        // loadedModel.scene.rotation.y += 0.01;
        // loadedModel.scene.rotation.z += 0.01;
      }
      requestAnimationFrame(animate);
    };
    animate();
  }, []);

  return (
    <div className="w-1/2">
      <canvas id="myThreeJsCanvas" />
    </div>
  );
};

export default Body3dModel;
