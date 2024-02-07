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
  private loader: GLTFLoader;
  private model!: THREE.Group; // Utilisez THREE.Group pour regrouper les objets
  private rotationAngle = 0;
  private objetafficher: string = '';

  constructor() {
    this.loader = new GLTFLoader();
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
      this.camera.position.z = 105;

      this.renderer = new THREE.WebGLRenderer();
      this.renderer.setSize(parametre.clientWidth, parametre.clientHeight);
      parametre.appendChild(this.renderer.domElement);

      this.loadModel();
    } else {
      console.error('HTMLElement is null. Cannot initialize the scene.');
    }
  }

  private loadModel() {
    this.loader.load('../../assets/Objets3D/' + this.objetafficher, (gltf) => {
      this.model = gltf.scene;

      this.model.traverse((child) => {
        if (child instanceof THREE.Mesh) {
          if (child.material instanceof THREE.MeshStandardMaterial) {
            const originalColor = child.material.color.clone();

            // Appliquez la couleur et d'autres propriétés au besoin
            child.material.color = originalColor;
            child.material.emissiveIntensity = 1;
            child.material.metalness = 1;
            child.material.emissive.setHex(child.material.color.getHex());
            console.log(child.material.type);
          }
        }
      });

      this.scene.add(this.model);
    });
  }

  render() {
    requestAnimationFrame(() => this.render());

    this.rotationAngle += 0.01;
    // Assurez-vous que le modèle est utilisé pour la rotation
    if (this.model) {
      this.model.rotation.y = this.rotationAngle;
    }

    this.renderer.render(this.scene, this.camera);
    this.camera.updateMatrixWorld();
  }
}
