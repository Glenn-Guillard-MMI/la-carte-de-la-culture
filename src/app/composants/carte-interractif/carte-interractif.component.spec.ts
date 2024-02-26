import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarteInterractifComponent } from './carte-interractif.component';

describe('CarteInterractifComponent', () => {
  let component: CarteInterractifComponent;
  let fixture: ComponentFixture<CarteInterractifComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarteInterractifComponent]
    });
    fixture = TestBed.createComponent(CarteInterractifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
