import { TestBed } from '@angular/core/testing';

import { MusicalStyleService } from './musical-style.service';

describe('MusicalStyleService', () => {
  let service: MusicalStyleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MusicalStyleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
