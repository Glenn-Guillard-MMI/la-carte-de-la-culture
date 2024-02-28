import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThomasValentinComponent } from './thomas-valentin.component';

describe('ThomasValentinComponent', () => {
  let component: ThomasValentinComponent;
  let fixture: ComponentFixture<ThomasValentinComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ThomasValentinComponent]
    });
    fixture = TestBed.createComponent(ThomasValentinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
