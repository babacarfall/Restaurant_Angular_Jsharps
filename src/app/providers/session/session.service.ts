import { Injectable } from '@angular/core';
import { Utilisateur as User } from '../../model/user.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  user:User=new User();
  langue:string="en";
  key:string="isLoggedin";
  keylangue:string="langue";
  constructor(private router: Router) {
    this.getlogin();
    this.getlangue();
   }
   login(user:User){
     this.user=user;
     localStorage.setItem(this.key,JSON.stringify(user));
     this.router.navigate(['/dashboard']);
   }
   getlogin(){
    if(localStorage.getItem(this.key)){
      this.user=JSON.parse(localStorage.getItem(this.key));
      return;
    }
    this.router.navigate(['/login']);
   }
   getlangue(){
    if(localStorage.getItem(this.keylangue)){
      this.langue=localStorage.getItem(this.keylangue);
    }
    return this.langue;
   }
   getlanguetable(){
     this.getlangue();
     switch(this.langue){
       case 'fr':return {'url': '//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/French.json'};
       default:return {};
     }
   }
   setlangue(langue:string){
     localStorage.setItem(this.keylangue,langue);
     this.langue=langue;
   }
   removelogin(){
     localStorage.removeItem(this.key);
     this.getlogin();
   }

}
