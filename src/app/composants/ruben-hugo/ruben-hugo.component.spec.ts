import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RubenHugoComponent } from './ruben-hugo.component';

describe('RubenHugoComponent', () => {
  let component: RubenHugoComponent;
  let fixture: ComponentFixture<RubenHugoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RubenHugoComponent]
    });
    fixture = TestBed.createComponent(RubenHugoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
