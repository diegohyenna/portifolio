import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { V2HelloComponent } from './v2/pages/hello/hello.component';
import { V2ContactComponent } from './v2/pages/contact/contact.component';
import { V2ProjectsComponent } from './v2/pages/projects/projects.component';
import { V2AboutComponent } from './v2/pages/about/about.component';
import { BioComponent } from './v2/pages/about/bio/bio.component';
import { InterestsComponent } from './v2/pages/about/interests/interests.component';
import { EducationComponent } from './v2/pages/about/education/education.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'hello',
    pathMatch: 'full',
  },
  {
    path: 'hello',
    component: V2HelloComponent,
  },
  {
    path: 'contact',
    component: V2ContactComponent,
  },
  {
    path: 'projects',
    component: V2ProjectsComponent,
  },
  {
    path: 'about',
    component: V2AboutComponent,
    children: [
      { path: 'bio', component: BioComponent },
      {
        path: 'interests',
        component: InterestsComponent,
      },
      {
        path: 'education',
        component: EducationComponent,
      },
      { path: '', redirectTo: 'bio', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class V2WebRoutingModule {}
