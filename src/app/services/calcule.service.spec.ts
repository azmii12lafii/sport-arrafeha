import { TestBed } from '@angular/core/testing';

import { CalculeService } from './calcule.service';

describe('CalculeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CalculeService = TestBed.get(CalculeService);
    expect(service).toBeTruthy();
  });
});
