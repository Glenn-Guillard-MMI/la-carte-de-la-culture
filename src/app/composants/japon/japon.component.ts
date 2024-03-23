import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ServiceDeModélisationService } from 'src/app/Service/service-de-modélisation.service';

@Component({
  selector: 'app-japon',
  templateUrl: './japon.component.html',
  styleUrls: ['./japon.component.css']
})

export class JaponComponent implements OnInit {
  @ViewChild('scene', { static: true })
  scene!: ElementRef;
  
  constructor(private threeService: ServiceDeModélisationService) {}

  ngOnInit(): void {
    const glbFilePath = '../../../assets/Objets3D/koto.glb';
    this.threeService.init(
      this.scene.nativeElement,
      glbFilePath,
      6,
      '0xffffff',
      8
    );
  }
}