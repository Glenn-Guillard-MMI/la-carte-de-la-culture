import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ServiceDeModélisationService } from 'src/app/Service/service-de-modélisation.service';


@Component({
 selector: 'app-thomas-valentin',
 templateUrl: './thomas-valentin.component.html',
 styleUrls: ['./thomas-valentin.component.css']
})
export class ThomasValentinComponent implements OnInit {
 @ViewChild('scene', { static: true })
 scene!: ElementRef;


 constructor(private threeService: ServiceDeModélisationService) {}


 ngOnInit(): void {
   const glbFilePath = '../../../assets/Objets3D/moais.glb';
   this.threeService.init(
     this.scene.nativeElement,
     glbFilePath,
     10,
     '#ffffff',
     3.7
   );
 }
}
