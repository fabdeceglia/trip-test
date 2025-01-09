import { TestBed } from '@angular/core/testing';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { BackendService } from './backend.service';

describe('BackendService', () => {
  let service: BackendService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClientTesting()], 
    });
    service = TestBed.inject(BackendService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
