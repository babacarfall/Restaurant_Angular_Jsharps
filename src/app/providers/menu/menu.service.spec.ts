import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MenuService } from './menu.service';

describe('MenuServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MenuService],
      imports:[HttpClientTestingModule]
    });
  });

  it('should be created', inject([MenuService], (service: MenuService) => {
    expect(service).toBeTruthy();
  }));
});
