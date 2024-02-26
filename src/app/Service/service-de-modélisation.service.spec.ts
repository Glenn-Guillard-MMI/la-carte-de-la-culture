import { TestBed } from '@angular/core/testing';

import { ServiceDeModélisationService } from './service-de-modélisation.service';

describe('ServiceDeModélisationService', () => {
  let service: ServiceDeModélisationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceDeModélisationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
