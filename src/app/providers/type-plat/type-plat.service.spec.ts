import { TestBed, inject } from '@angular/core/testing';

import { TypePlatService } from './type-plat.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('TypeMenuServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers: [TypePlatService],
    });
  });

  it('should be created', inject([TypePlatService], (service: TypePlatService) => {
    expect(service).toBeTruthy();
  }));
});
