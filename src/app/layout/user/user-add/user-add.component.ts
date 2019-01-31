import { Component, OnInit } from '@angular/core';
import { Utilisateur as User } from '../../../model/user.model';
import { UserService } from '../../../providers/user/user.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';
import { routerTransition } from '../../../router.animations';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.scss'],
  animations: [routerTransition()]
})
export class UserAddComponent implements OnInit {

  user: User = new User();
  this_this:any;
  constructor(public activeModal: NgbActiveModal, private userService: UserService, private toasterService: ToastrService) {
  }

  ngOnInit() {
  }
  create(updateForm: NgForm) {
    this.user.username = updateForm.form.value.username;
    this.user.password = updateForm.form.value.password;
    if(this.user.username==null||this.user.username=="")
    {
      this.toasterService.warning("Information","Veuillez saisir le nom d'utilisateur");
      return;
    }
    if(this.user.password==null||this.user.password=="")
    {
      this.toasterService.warning("Information","Veuillez saisir un mot de passe valide");
      return;
    }
    if(this.user.password.length<10)
    {
      this.toasterService.warning("Information","Le mot de passe doit dépasser 10 caractere");
      return;
    }
    if(this.user.username.length<5)
    {
      this.toasterService.warning("Information","Le nom d'utilisateur doit dépasser 5 caractere");
      return;
    }
    this.userService.add(this.user).subscribe(data => {
      this.toasterService.success('Utilisateur', 'Un nouvel utilisateur a été ajouté avec succès');
      this.activeModal.close();
      this.this_this.get();
    }, err => {
      this.toasterService.error("Erreur",'Impossible d\'ajouter ces informations');
      console.log(err);
    });
  }

}
