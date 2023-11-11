import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ImageComponent } from './image/image.component';
import { ParagraphComponent } from './paragraph/paragraph.component';
import { LinkComponent } from './link/link.component';
import { SocialMediaComponent } from './social-media/social-media.component';
import { AlertComponent } from './alert/alert.component';
import { JsonEditorComponent } from './json-editor/json-editor.component';
import { JsonPageEditComponent } from './json-page-edit/json-page-edit.component';
import { JsonPageViewComponent } from './json-page-view/json-page-view.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    ImageComponent,
    ParagraphComponent,
    LinkComponent,
    JsonEditorComponent,
    JsonPageEditComponent,
    JsonPageViewComponent,
    SocialMediaComponent,
    AlertComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, FormsModule, RouterModule],
  exports: [
    ImageComponent,
    ParagraphComponent,
    LinkComponent,
    JsonEditorComponent,
    JsonPageEditComponent,
    JsonPageViewComponent,
    SocialMediaComponent,
    AlertComponent,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
  ],
})
export class SharedModule {}
