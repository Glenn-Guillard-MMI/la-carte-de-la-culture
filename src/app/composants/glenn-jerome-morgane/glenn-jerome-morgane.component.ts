import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ServiceDeModélisationService } from 'src/app/Service/service-de-modélisation.service';

@Component({
  selector: 'app-glenn-jerome-morgane',
  templateUrl: './glenn-jerome-morgane.component.html',
  styleUrls: ['./glenn-jerome-morgane.component.css'],
})
export class GlennJeromeMorganeComponent implements OnInit {
  @ViewChild('scene', { static: true })
  scene!: ElementRef;

  constructor(private threeService: ServiceDeModélisationService) {}

  ngOnInit(): void {
    const glbFilePath = '../../../assets/Objets3D/scarabee_version_final.glb';
    this.threeService.init(
      this.scene.nativeElement,
      glbFilePath,
      8,
      '0xffffff',
      5
    );
  }
}
