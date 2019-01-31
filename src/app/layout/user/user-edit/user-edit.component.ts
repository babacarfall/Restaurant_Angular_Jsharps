import { Component, OnInit } from '@angular/core';
import { Utilisateur as User} from '../../../model/user.model';
import { NgForm } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from '../../../providers/user/user.service';
import { routerTransition } from '../../../router.animations';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss'],
  animations: [routerTransition()]
})
export class UserEditComponent implements OnInit {
  user:User=new User();
  this_this:any;
  password:string;
  constructor(public activeModal: NgbActiveModal, private userService: UserService, 
    private toasterService: ToastrService) { }

  ngOnInit() {
  }
  
  update(updateForm: NgForm) {
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
      this.toasterService.success('Utilisateur', 'Information mise Ã  jour avec succÃ¨s');
      this.activeModal.close();
      this.this_this.get();
    }, err => {
      alert('Impossible d\'ajouter ces informations');
    });
  }

}
