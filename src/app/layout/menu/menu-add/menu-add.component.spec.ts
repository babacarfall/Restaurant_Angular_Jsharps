import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuAddComponent } from './menu-add.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { MenuService } from '../../../providers/menu/menu.service';

describe('MenuAddComponent', () => {
  let component: MenuAddComponent;
  let fixture: ComponentFixture<MenuAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuAddComponent ],
      imports:[BrowserAnimationsModule,FormsModule,
        TranslateModule.forRoot(),HttpClientTestingModule],
      providers:[NgbActiveModal, ToastrService,MenuService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
