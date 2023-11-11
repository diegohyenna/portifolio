import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { V1AboutComponent } from './v1/components/about/about.component';
import { V1CarouselComponent } from './v1/components/carousel/carousel.component';
import { V1FooterComponent } from './v1/components/footer/footer.component';
import { V1HeaderComponent } from './v1/components/header/header.component';
import { V1ProjectsComponent } from './v1/components/projects/projects.component';
import { V1HomeComponent } from './v1/pages/home/home.component';
import { V2BodyComponent } from './v2/components/body/body.component';
import { V2FooterComponent } from './v2/components/footer/footer.component';
import { V2HeaderComponent } from './v2/components/header/header.component';
import { V2SidenavComponent } from './v2/components/sidenav/sidenav.component';
import { V2ContactComponent } from './v2/pages/contact/contact.component';
import { V2HelloComponent } from './v2/pages/hello/hello.component';
import { V2WebTemplateComponent } from './v2/templates/web/web.template';
import { V2WebRoutingModule } from './web-routing.module';
import { V2AboutComponent } from './v2/pages/about/about.component';
import { BioComponent } from './v2/pages/about/bio/bio.component';
import { InterestsComponent } from './v2/pages/about/interests/interests.component';
import { EducationComponent } from './v2/pages/about/education/education.component';
import { TreeItemComponent } from './v2/components/tree-item/tree-item.component';
import { TreeRootComponent } from './v2/components/tree-root/tree-root.component';

@NgModule({
  declarations: [
    V1AboutComponent,
    V1CarouselComponent,
    V1ProjectsComponent,
    V1HeaderComponent,
    V1FooterComponent,
    V1HomeComponent,
    V2HelloComponent,
    V2FooterComponent,
    V2HeaderComponent,
    V2SidenavComponent,
    V2AboutComponent,
    V2BodyComponent,
    V2WebTemplateComponent,
    V2ContactComponent,
    BioComponent,
    InterestsComponent,
    EducationComponent,
    TreeItemComponent,
    TreeRootComponent,
  ],
  imports: [
    CommonModule,
    V2WebRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
})
export class V2WebModule {}
