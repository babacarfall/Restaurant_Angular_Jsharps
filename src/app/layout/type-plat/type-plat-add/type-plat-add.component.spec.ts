import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypePlatAddComponent } from './type-plat-add.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { TypePlatService } from '../../../providers/type-plat/type-plat.service';
import { TranslateModule } from '@ngx-translate/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ToastrService } from 'ngx-toastr';

describe('TypePlatAddComponent', () => {
  let component: TypePlatAddComponent;
  let fixture: ComponentFixture<TypePlatAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[BrowserAnimationsModule,FormsModule,
        TranslateModule.forRoot(),HttpClientTestingModule],
      declarations: [ TypePlatAddComponent ],
      providers:[NgbActiveModal, ToastrService,TypePlatService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypePlatAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
