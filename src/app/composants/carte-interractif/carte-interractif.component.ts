import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carte-interractif',
  templateUrl: './carte-interractif.component.html',
  styleUrls: ['./carte-interractif.component.css'],
})
export class CarteInterractifComponent {
  constructor(private router: Router) {}
  ngOnInit() {
    this.router.events.subscribe((event) => {
      window.scrollTo(0, 0);
    });
  }
}
