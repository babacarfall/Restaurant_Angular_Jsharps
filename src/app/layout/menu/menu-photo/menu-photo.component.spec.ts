import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuPhotoComponent } from './menu-photo.component';
import { ImageService } from '../../../providers/image/image.service';
import { ToastrService } from 'ngx-toastr';

describe('MenuPhotoComponent', () => {
  let component: MenuPhotoComponent;
  let fixture: ComponentFixture<MenuPhotoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuPhotoComponent ],
      providers:[ImageService,ToastrService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuPhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
