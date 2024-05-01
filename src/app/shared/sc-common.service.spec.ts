import { TestBed } from '@angular/core/testing';

import { ScCommonService } from './sc-common.service';

describe('ScCommonService', () => {
  let service: ScCommonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScCommonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
