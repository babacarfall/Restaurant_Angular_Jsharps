import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuListComponent } from './menu-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { UserService } from '../../../providers/user/user.service';
import { TemplateModule } from '../../../template/template.module';
import { MenuService } from '../../../providers/menu/menu.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TranslateModule } from '@ngx-translate/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';

describe('MenuListComponent', () => {
  let component: MenuListComponent;
  let fixture: ComponentFixture<MenuListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuListComponent ],
      imports:[BrowserAnimationsModule,
        TranslateModule.forRoot(),HttpClientTestingModule],
      providers:[NgbActiveModal, ToastrService,MenuService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
