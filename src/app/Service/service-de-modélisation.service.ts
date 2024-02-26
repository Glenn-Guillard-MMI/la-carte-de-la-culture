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
    alpha: true, // Assurez-vous de définir alpha ici aussi
  });
  private controls!: OrbitControls;

  constructor() {}

  init(div: HTMLDivElement, glbFilePath: string, zoomObjet: number): void {
    this.camera = new THREE.PerspectiveCamera(
      75,
      div.clientWidth / div.clientHeight,
      0.1,
      100
    );
    this.camera.position.set(0, 0, zoomObjet);

    this.renderer.setSize(div.clientWidth, div.clientHeight);
    div.appendChild(this.renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0xffffff, 3.2);
    this.scene.add(ambientLight);

    const loader = new GLTFLoader();
    loader.load(glbFilePath, (gltf) => {
      const object = gltf.scene;

      // Ajout des contrôles Orbit
      this.controls = new OrbitControls(this.camera, this.renderer.domElement);
      this.controls.enableZoom = false;
      this.controls.enablePan = true;

      this.scene.add(object);

      // Animation
      const animate = () => {
        // Votre logique d'animation ici
        const delta = 0.005;
        object.rotation.y += delta;
        this.renderer.render(this.scene, this.camera);

        requestAnimationFrame(animate);
      };

      animate();
    });
  }
}
