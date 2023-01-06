import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from '../../guards/auth.guard';
import { ProjectComponent } from './project/project.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NewProjectComponent } from './project/new-project/new-project.component';
import { NewAboutComponent } from './about/new-about/new-about.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    pathMatch: 'full',
    component: HomeComponent,
    canActivate: [AuthGuard],
    canLoad: [AuthGuard],
    data: { role: 'read' },
  },
  {
    path: 'project',
    pathMatch: 'full',
    component: ProjectComponent,
    canActivate: [AuthGuard],
    canLoad: [AuthGuard],
    data: { role: 'read' },
  },
  {
    path: 'project/new',
    pathMatch: 'full',
    component: NewProjectComponent,
    canActivate: [AuthGuard],
    canLoad: [AuthGuard],
    data: { role: 'write' },
  },
  {
    path: 'about',
    pathMatch: 'full',
    component: AboutComponent,
    canActivate: [AuthGuard],
    canLoad: [AuthGuard],
    data: { role: 'read' },
  },
  {
    path: 'about/new',
    pathMatch: 'full',
    component: NewAboutComponent,
    canActivate: [AuthGuard],
    canLoad: [AuthGuard],
    data: { role: 'write' },
  },
  {
    path: 'header',
    pathMatch: 'full',
    component: HeaderComponent,
    canActivate: [AuthGuard],
    canLoad: [AuthGuard],
    data: { role: 'read' },
  },
  {
    path: 'footer',
    pathMatch: 'full',
    component: FooterComponent,
    canActivate: [AuthGuard],
    canLoad: [AuthGuard],
    data: { role: 'read' },
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
