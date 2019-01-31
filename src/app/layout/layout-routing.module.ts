import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'prefix' },
            { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
            { path: 'users', loadChildren: './user/user.module#UserModule' },
            { path: 'menus', loadChildren: './menu/menu.module#MenuModule' },
            { path: 'typeplats', loadChildren: './type-plat/type-plat.module#TypePlatModule' },
            { path: 'blank-page', loadChildren: './blank-page/blank-page.module#BlankPageModule' },
            { path: 'charts', loadChildren: './charts/charts.module#ChartsModule' },
            {
                path: 'about',
                component:AboutComponent
            },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}
