import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuAddComponent } from './menu-add/menu-add.component';
import { MenuEditComponent } from './menu-edit/menu-edit.component';
import { MenuListComponent } from './menu-list/menu-list.component';
import { MenuInfoComponent } from './menu-info/menu-info.component';

const routes: Routes = [
    {
        path: '',
        component:MenuListComponent
    },
    {
        path: 'add',
        component:MenuAddComponent
    },
    {
        path: 'info/:id',
        component:MenuInfoComponent
    },
    {
        path: 'edit/:id',
        component:MenuEditComponent
    },
    {
        path: '**',
        component:MenuListComponent
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MenuRoutingModule {}
