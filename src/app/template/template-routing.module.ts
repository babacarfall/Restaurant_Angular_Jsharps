import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TablesComponent } from './tables/tables.component';
import { MsgConfirmationComponent } from './msg-confirmation/msg-confirmation.component';


const routes: Routes = [
    {
        path: 'tables',
        component: TablesComponent,
        data: {
            title: 'La liste'
        }
    },
    {
        path: 's',
        component: MsgConfirmationComponent
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class TemplateRoutingModule { }
