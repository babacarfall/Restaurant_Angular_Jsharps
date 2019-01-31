import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { ChartsModule as Ng2Charts } from 'ng2-charts';
import { TablesComponent } from './tables/tables.component';
import { TemplateRoutingModule } from './template-routing.module';
import { TableHeaderComponent } from './tables/table-header/table-header.component';
import { MsgConfirmationComponent } from './msg-confirmation/msg-confirmation.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,Ng2Charts,TranslateModule,
    TemplateRoutingModule,
  ],exports:[TableHeaderComponent,MsgConfirmationComponent],
  declarations: [TablesComponent, 
    TableHeaderComponent, MsgConfirmationComponent],
  providers:[]
})
export class TemplateModule { }
