import { TestBed } from '@angular/core/testing';

import { DashesService } from './dashes.service';

describe('DashesService', () => {
  let service: DashesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DashesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
