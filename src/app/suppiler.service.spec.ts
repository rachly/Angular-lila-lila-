import { TestBed } from '@angular/core/testing';

import { SuppilerService } from './suppiler.service';

describe('SuppilerService', () => {
  let service: SuppilerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SuppilerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
