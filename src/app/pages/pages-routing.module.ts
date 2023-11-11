import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from '../guards/auth.guard';
import { V1HomeComponent } from '../modules/web/v1/pages/home/home.component';
import { V2WebTemplateComponent } from '../modules/web/v2/templates/web/web.template';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'v2',
    pathMatch: 'full',
  },
  {
    path: 'home',
    pathMatch: 'full',
    component: V1HomeComponent,
  },
  {
    path: 'v2',
    pathMatch: 'prefix',
    component: V2WebTemplateComponent,
    loadChildren: () =>
      import('../modules/web/web.module').then((m) => m.V2WebModule),
  },
  {
    path: 'admin',
    component: AdminComponent,
    loadChildren: () =>
      import('../modules/admin/admin.module').then((m) => m.AdminModule),
    canActivate: [AuthGuard],
    canLoad: [AuthGuard],
    data: { roles: 'read' },
  },
  {
    path: 'login',
    pathMatch: 'full',
    component: LoginComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
