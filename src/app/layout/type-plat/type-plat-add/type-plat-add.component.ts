import { Component, OnInit } from '@angular/core';
import { TypePlat } from '../../../model/type-plat.model';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { TypePlatService } from '../../../providers/type-plat/type-plat.service';
import { NgForm } from '@angular/forms';
import { routerTransition } from '../../../router.animations';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-type-plat-add',
  templateUrl: './type-plat-add.component.html',
  styleUrls: ['./type-plat-add.component.scss'],
  animations: [routerTransition()]
})
export class TypePlatAddComponent implements OnInit {
  typeplat: TypePlat = new TypePlat();
  this_this:any;
  constructor(public activeModal: NgbActiveModal, private typeplatService: TypePlatService, private toasterService: ToastrService) {
  }

  ngOnInit() {
  }
  create(updateForm: NgForm) {
    this.typeplat.nom = updateForm.form.value.nom;
    this.typeplatService.add(this.typeplat).subscribe(data => {
      this.toasterService.success('Type Plat', 'Une nouvelle type plat a été ajouté avec succès');
      this.this_this.get();
      this.activeModal.close();
    }, err => {
      alert('Impossible d\'ajouter ces informations');
    });
  }

}
