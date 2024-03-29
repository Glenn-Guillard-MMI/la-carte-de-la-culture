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
 }
}
