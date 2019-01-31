import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../router.animations';
import { SessionService } from '../providers/session/session.service';
import { UserService } from '../providers/user/user.service';
import { Utilisateur as User } from '../model/user.model';
import { NgForm } from '@angular/forms';
import { useAnimation } from '@angular/animations';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
    user:User = new User();
    rememberMe:any;
    constructor(private sessionService:SessionService,private userService:UserService,private toasterService:ToastrService) {}

    ngOnInit() {}

    login(loform:NgForm) {
        if(this.user.username==null||this.user.username==""){
            this.toasterService.warning("","Veuillez saisir un nom d'utilisateur");
            return;
        }
        this.userService.login(this.user).subscribe(data=>{
            if(data!=null){
            this.sessionService.login(data);
            this.toasterService.success("Authentification","Bienvenue");
            }
            else
            
            this.toasterService.error("Authentification","Vos identifiants sont incorrects");
        },
        err=>{
            this.toasterService.error("Authentification","Vos identifiants sont incorrects");
            console.log(err);
        });

    }
}
