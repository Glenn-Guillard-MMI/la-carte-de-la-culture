import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ServiceDeModélisationService } from 'src/app/Service/service-de-modélisation.service';

@Component({
  selector: 'app-glenn-jerome-morgane',
  templateUrl: './glenn-jerome-morgane.component.html',
  styleUrls: ['./glenn-jerome-morgane.component.css'],
})
export class GlennJeromeMorganeComponent implements OnInit {
  @ViewChild('scene', { static: true }) scene!: ElementRef;

  constructor(private threeService: ServiceDeModélisationService) {}

  ngOnInit(): void {
    const glbFilePath = '../../../assets/Objets3D/low_poly_planet_earth.glb';
    this.threeService.init(this.scene.nativeElement, glbFilePath, 2.5);
  }
}
