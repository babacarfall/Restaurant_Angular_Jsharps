import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { routerTransition } from '../../router.animations';

@Component({
  selector: 'app-msg-confirmation',
  templateUrl: './msg-confirmation.component.html',
  styleUrls: ['./msg-confirmation.component.scss'],
  animations: [routerTransition()]
})
export class MsgConfirmationComponent implements OnInit {
  this_this:any;
  data:any;
  message:string;
  titre:string;
  index:any;
  constructor(public activeModal: NgbActiveModal) { }
  ngOnInit() {
  }
  clickUp() {
    if(this.data==null)
      this.this_this.action();
    else if(this.index!=null)
      this.this_this.action(this.data,this.index);
    else 
      this.this_this.action(this.data);
    this.activeModal.close('Close click');
  }
}
