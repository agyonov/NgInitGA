import { TestBed } from '@angular/core/testing';

import { GaLibService } from './ga-lib.service';

describe('GaLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GaLibService = TestBed.get(GaLibService);
    expect(service).toBeTruthy();
  });
});
