import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TypePlatComponent } from './type-plat.component';
import { TypePlatAddComponent } from './type-plat-add/type-plat-add.component';
import { TypePlatEditComponent } from './type-plat-edit/type-plat-edit.component';
import { TypePlatListComponent } from './type-plat-list/type-plat-list.component';
import { TypePlatRoutingModule } from './type-plat-routing.module';
import { TranslateModule } from '@ngx-translate/core';
import { NgbDropdownModule, NgbModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { TemplateModule } from '../../template/template.module';
import { TypePlatService } from '../../providers/type-plat/type-plat.service';
import { SessionService } from '../../providers/session/session.service';
import { ToastrService } from 'ngx-toastr';

@NgModule({
  imports: [
    CommonModule,
    TypePlatRoutingModule,
    TranslateModule,
    NgbDropdownModule.forRoot(),
    NgbDropdownModule.forRoot(),
    FormsModule, NgbModule.forRoot(), NgbModalModule, TemplateModule
  ],
  declarations: [TypePlatComponent, TypePlatAddComponent, TypePlatEditComponent, TypePlatListComponent],
  providers:[TypePlatService,SessionService,ToastrService]
})
export class TypePlatModule { }
