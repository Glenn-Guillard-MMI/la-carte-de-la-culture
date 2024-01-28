import { Component, OnInit } from '@angular/core';
import { ThreeService } from 'src/app/Service/three.service';

@Component({
  selector: 'app-glenn-jerome-morgane',
  templateUrl: './glenn-jerome-morgane.component.html',
  styleUrls: ['./glenn-jerome-morgane.component.css'],
})
export class GlennJeromeMorganeComponent implements OnInit {
  constructor(private threeService: ThreeService) {}

  ngOnInit(): void {
    this.threeService.initializeScene(
      document.getElementById('monobjet'),
      'sca.glb'
    );
    this.threeService.render();
  }
}
