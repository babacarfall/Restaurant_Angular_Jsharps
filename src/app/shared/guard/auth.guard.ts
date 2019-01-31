import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private router: Router,private translate: TranslateService) {
        
        if(localStorage.getItem('langue')){
            this.translate.use(localStorage.getItem('langue'));
        }
    }

    canActivate() {
        if (localStorage.getItem('isLoggedin')) {
            return true;
        }
        this.router.navigate(['/login']);
        return false;
    }
}
