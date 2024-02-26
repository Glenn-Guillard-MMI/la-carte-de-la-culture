import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ServiceDeModélisationService } from 'src/app/Service/service-de-modélisation.service';

@Component({
  selector: 'app-carte',
  templateUrl: './carte.component.html',
  styleUrls: ['./carte.component.css'],
})
export class CarteComponent implements OnInit {
  @ViewChild('scene', { static: true }) scene!: ElementRef;

  constructor(private threeService: ServiceDeModélisationService) {}

  ngOnInit(): void {
    const glbFilePath = '../../../assets/Objets3D/low_poly_planet_earth.glb';
    this.threeService.init(this.scene.nativeElement, glbFilePath, 2.5);
  }
}
