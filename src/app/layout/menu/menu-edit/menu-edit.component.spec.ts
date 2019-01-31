import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuEditComponent } from './menu-edit.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { MenuService } from '../../../providers/menu/menu.service';

describe('MenuEditComponent', () => {
  let component: MenuEditComponent;
  let fixture: ComponentFixture<MenuEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuEditComponent ],
      imports:[BrowserAnimationsModule,FormsModule,
        TranslateModule.forRoot(),HttpClientTestingModule],
      providers:[NgbActiveModal, ToastrService,MenuService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
