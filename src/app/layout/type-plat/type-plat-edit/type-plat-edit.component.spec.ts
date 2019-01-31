import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypePlatEditComponent } from './type-plat-edit.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { TypePlatService } from '../../../providers/type-plat/type-plat.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TranslateModule } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';

describe('TypePlatEditComponent', () => {
  let component: TypePlatEditComponent;
  let fixture: ComponentFixture<TypePlatEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[BrowserAnimationsModule,FormsModule,HttpClientTestingModule,
        TranslateModule.forRoot(),],
      declarations: [ TypePlatEditComponent ],
      providers:[NgbActiveModal, ToastrService,TypePlatService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypePlatEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
