import { TestBed } from '@angular/core/testing';

import { ErrorInteceptorService } from './error-inteceptor.service';

describe('ErrorInteceptorService', () => {
  let service: ErrorInteceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ErrorInteceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
