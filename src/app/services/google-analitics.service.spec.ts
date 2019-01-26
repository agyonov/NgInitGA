import { TestBed } from '@angular/core/testing';

import { GoogleAnaliticsService } from './google-analitics.service';

describe('GoogleAnaliticsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GoogleAnaliticsService = TestBed.get(GoogleAnaliticsService);
    expect(service).toBeTruthy();
  });
});
