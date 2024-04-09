import { TestBed } from '@angular/core/testing';

import { IntructorsListService } from './intructors-list.service';

describe('IntructorsListService', () => {
  let service: IntructorsListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IntructorsListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
