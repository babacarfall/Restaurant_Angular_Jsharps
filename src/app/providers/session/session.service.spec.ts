import { TestBed, inject } from '@angular/core/testing';

import { SessionService } from './session.service';
import { RouterTestingModule } from '@angular/router/testing';

describe('SessionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SessionService],
      imports:[RouterTestingModule]
    });
  });

  it('should be created', inject([SessionService], (service: SessionService) => {
    expect(service).toBeTruthy();
  }));
});
