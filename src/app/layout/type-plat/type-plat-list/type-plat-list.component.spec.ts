import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypePlatListComponent } from './type-plat-list.component';
import { TypePlatService } from '../../../providers/type-plat/type-plat.service';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TemplateModule } from '../../../template/template.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ToastrService } from 'ngx-toastr';

describe('TypePlatListComponent', () => {
  let component: TypePlatListComponent;
  let fixture: ComponentFixture<TypePlatListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypePlatListComponent ],
      imports:[
        RouterTestingModule,BrowserAnimationsModule,TemplateModule,HttpClientTestingModule],
        providers:[TypePlatService,ToastrService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypePlatListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
