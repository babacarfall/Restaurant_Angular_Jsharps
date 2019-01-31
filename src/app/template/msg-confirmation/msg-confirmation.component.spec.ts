import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MsgConfirmationComponent } from './msg-confirmation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule, NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

describe('MsgConfirmationComponent', () => {
  let component: MsgConfirmationComponent;
  let fixture: ComponentFixture<MsgConfirmationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MsgConfirmationComponent ],
      imports:[BrowserAnimationsModule,NgbModule.forRoot()],
      providers:[NgbModal,NgbActiveModal]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MsgConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
