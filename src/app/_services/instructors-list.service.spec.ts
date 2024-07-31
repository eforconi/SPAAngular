import { TestBed } from '@angular/core/testing';

import { IntructorsListService } from './instructors-list.service';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';

describe('IntructorsListService', () => {
  let service: IntructorsListService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(),
        provideHttpClientTesting()],
    });
    service = TestBed.inject(IntructorsListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
