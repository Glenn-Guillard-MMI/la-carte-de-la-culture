import { Injectable } from '@angular/core';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

@Injectable({
  providedIn: 'root',
})
export class ServiceDeModélisationService {
  private scene: THREE.Scene = new THREE.Scene();
  private camera: THREE.PerspectiveCamera = new THREE.PerspectiveCamera();
  private renderer: THREE.WebGLRenderer = new THREE.WebGLRenderer({
    alpha: true,
  });
  private controls!: OrbitControls;
  private object3D: THREE.Object3D | null = null; // Allow null
  private ambientLight: THREE.AmbientLight | null = null; // Allow null

  constructor() {}

  clearScene(): void {
    if (this.object3D) {
      this.scene.remove(this.object3D);
      this.object3D.traverse((child) => {
        if (child instanceof THREE.Mesh) {
          child.geometry.dispose();
          child.material.dispose();
        }
      });
      this.renderer.dispose();
      this.object3D = null;
    }

    if (this.ambientLight) {
      this.scene.remove(this.ambientLight);
      this.ambientLight = null;
    }
  }

  init(
    div: HTMLDivElement,
    glbFilePath: string,
    zoomObjet: number,
    colorAmbiance: string,
    IntensiterColor: number
  ): void {
    this.clearScene();
    this.camera = new THREE.PerspectiveCamera(
      75,
      div.clientWidth / div.clientHeight,
      0.1,
      100
    );
    this.camera.position.set(0, 0, zoomObjet);

    this.renderer.setSize(div.clientWidth, div.clientHeight);
    div.appendChild(this.renderer.domElement);

    const loader = new GLTFLoader();
    loader.load(glbFilePath, (gltf) => {
      this.object3D = gltf.scene;

      this.controls = new OrbitControls(this.camera, this.renderer.domElement);
      this.controls.enableZoom = false;
      this.controls.enablePan = true;

      this.scene.add(this.object3D);

      // Ajoutez une lumière ambiante seulement si elle n'existe pas déjà
      if (!this.ambientLight) {
        this.ambientLight = new THREE.AmbientLight(
          colorAmbiance,
          IntensiterColor
        );
        this.scene.add(this.ambientLight);
      }

      const animate = () => {
        const delta = 0.005;
        if (this.object3D) {
          this.object3D.rotation.y += delta;
        }
        this.renderer.render(this.scene, this.camera);

        requestAnimationFrame(animate);
      };

      animate();
    });
  }
}
