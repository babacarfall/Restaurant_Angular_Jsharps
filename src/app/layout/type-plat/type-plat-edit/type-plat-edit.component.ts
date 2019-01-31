import { Component, OnInit, Input } from '@angular/core';
import { TypePlat } from '../../../model/type-plat.model';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { TypePlatService } from '../../../providers/type-plat/type-plat.service';
import { NgForm } from '@angular/forms';
import { routerTransition } from '../../../router.animations';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-type-plat-edit',
  templateUrl: './type-plat-edit.component.html',
  styleUrls: ['./type-plat-edit.component.scss'],
  animations: [routerTransition()]
})
export class TypePlatEditComponent implements OnInit {
  typeplat: TypePlat = new TypePlat();
  this_this:any;
  constructor(public activeModal: NgbActiveModal, private typeplatService: TypePlatService, private toasterService: ToastrService) {
  }

  ngOnInit() {
  }
  update(updateForm: NgForm) {
    this.typeplat.nom = updateForm.form.value.nom;
    this.typeplatService.update(this.typeplat.id,this.typeplat).subscribe(data => {
      this.toasterService.success('Type Plat', 'Information mis à jour avec succès');
      this.this_this.get();
      this.activeModal.close();
    }, err => {
      this.toasterService.error('Type Plat', 'Impossible de mettre à jour ces informations');
    });
  }

}
