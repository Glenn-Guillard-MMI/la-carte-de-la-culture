import { Injectable } from '@angular/core';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

@Injectable({
  providedIn: 'root',
})
export class ThreeService {
  private scene!: THREE.Scene;
  private camera!: THREE.PerspectiveCamera;
  private renderer!: THREE.WebGLRenderer;
  private loader: THREE.Loader;
  private rotationAngle = 0;
  private objetafficher: string = '';

  constructor() {
    this.loader = new THREE.Loader();
  }
  initializeScene(parametre: HTMLElement | null, objetafficher: string) {
    if (parametre) {
      this.scene = new THREE.Scene();
      this.scene.background = new THREE.Color('#252121');
      this.objetafficher = objetafficher;

      this.camera = new THREE.PerspectiveCamera(
        75,
        parametre.clientWidth / parametre.clientHeight,
        0.1,
        1000
      );
      this.camera.position.z = 5;
      this.camera.position.set(0, 0, 5);

      this.renderer = new THREE.WebGLRenderer();
      this.renderer.setSize(parametre.clientWidth, parametre.clientHeight);
      parametre.appendChild(this.renderer.domElement);

      this.loadModel();
    } else {
      console.error('HTMLElement is null. Cannot initialize the scene.');
    }
  }

  private loadModel() {
    const loader = new GLTFLoader();

    loader.load('../../assets/Objets3D/' + this.objetafficher, (gltf) => {
      const model = gltf.scene;

      model.traverse((child) => {
        if (child instanceof THREE.Mesh) {
          if (child.material instanceof THREE.MeshStandardMaterial) {
            child.material.emissiveIntensity = 1;

            child.material.emissive.setHex(child.material.color.getHex());
          }
        }
      });
      this.scene.add(model);
    });
  }

  render() {
    requestAnimationFrame(() => this.render());

    this.rotationAngle -= 0.01;
    this.scene.rotation.y = this.rotationAngle;

    this.renderer.render(this.scene, this.camera);
    this.camera.updateMatrixWorld();
  }
}
