import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu.component';
import { MenuAddComponent } from './menu-add/menu-add.component';
import { MenuEditComponent } from './menu-edit/menu-edit.component';
import { MenuListComponent } from './menu-list/menu-list.component';
import { MenuRoutingModule } from './menu-routing.module';
import { TranslateModule } from '@ngx-translate/core';
import { NgbDropdownModule, NgbModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { TemplateModule } from '../../template/template.module';
import { MenuInfoComponent } from './menu-info/menu-info.component';
import { MenuPhotoComponent } from './menu-photo/menu-photo.component';
import { MenuService } from '../../providers/menu/menu.service';
import { ToastrService } from 'ngx-toastr';
import { MenuStatistiqueComponent } from './menu-statistique/menu-statistique.component';
import { ChartsModule as Ng2Charts } from 'ng2-charts';

@NgModule({
  imports: [
  CommonModule,MenuRoutingModule,
    TranslateModule,
    NgbDropdownModule.forRoot(),
    FormsModule, NgbModule.forRoot(), NgbModalModule, TemplateModule,Ng2Charts,
  ],
  providers:[ToastrService,MenuService],
  declarations: [MenuComponent, MenuAddComponent, MenuEditComponent, MenuListComponent, MenuInfoComponent, MenuPhotoComponent, MenuStatistiqueComponent]
})
export class MenuModule { }
