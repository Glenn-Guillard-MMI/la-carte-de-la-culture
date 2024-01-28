import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlennJeromeMorganeComponent } from './glenn-jerome-morgane.component';

describe('GlennJeromeMorganeComponent', () => {
  let component: GlennJeromeMorganeComponent;
  let fixture: ComponentFixture<GlennJeromeMorganeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GlennJeromeMorganeComponent]
    });
    fixture = TestBed.createComponent(GlennJeromeMorganeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
