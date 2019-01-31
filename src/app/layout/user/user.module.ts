import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { PageHeaderModule } from './../../shared';
import { UserComponent } from './user.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { UserAddComponent } from './user-add/user-add.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { NgbDropdownModule, NgbModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { TemplateModule } from '../../template/template.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
    imports: [CommonModule, PageHeaderModule, UserRoutingModule, 
        FormsModule,
        TranslateModule,
        HttpModule,
        NgbDropdownModule.forRoot(),
        FormsModule, NgbModule.forRoot(), NgbModalModule, TemplateModule],
    declarations: [UserComponent, UserAddComponent, UserEditComponent]
})
export class UserModule { }
