import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TypePlatAddComponent } from './type-plat-add/type-plat-add.component';
import { TypePlatEditComponent } from './type-plat-edit/type-plat-edit.component';
import { TypePlatListComponent } from './type-plat-list/type-plat-list.component';

const routes: Routes = [
    {
        path: 'add',
        component:TypePlatAddComponent
    },
    {
        path: 'edit/:id',
        component:TypePlatEditComponent
    },
    {
        path: '',
        component:TypePlatListComponent
    },
    {
        path: '**',
        component:TypePlatListComponent
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TypePlatRoutingModule {}
