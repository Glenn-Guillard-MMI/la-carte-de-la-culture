import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ServiceDeModélisationService } from 'src/app/Service/service-de-modélisation.service';

@Component({
  selector: 'app-ruben-hugo',
  templateUrl: './ruben-hugo.component.html',
  styleUrls: ['./ruben-hugo.component.css'],
})
export class RubenHugoComponent implements OnInit {
  @ViewChild('scene', { static: true })
  scene!: ElementRef;

  constructor(private threeService: ServiceDeModélisationService) {}

  ngOnInit(): void {
    const glbFilePath = '../../../assets/Objets3D/oeilgrec.glb';
    this.threeService.init(
      this.scene.nativeElement,
      glbFilePath,
      9,
      '0xffffff',
      1
    );
  }
}
