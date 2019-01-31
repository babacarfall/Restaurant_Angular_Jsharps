import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { NgForm, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    imports: [CommonModule, LoginRoutingModule, ReactiveFormsModule,
        FormsModule, HttpClientModule, TranslateModule,
        NgbDropdownModule.forRoot()],
    declarations: [LoginComponent],
    providers: [],
})
export class LoginModule { }
