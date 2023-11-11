import {
  Component,
  Input,
  OnInit,
  QueryList,
  ViewChildren,
  ViewContainerRef,
} from '@angular/core';
import { IDynamicComponent } from 'src/app/shared/dynamic-component/dynamic-component.interface';
import { DynamicComponentShared } from 'src/app/shared/dynamic-component/dynamic-component.shared';
import { ImageComponent } from 'src/app/shared/image/image.component';
import { LinkComponent } from 'src/app/shared/link/link.component';
import { ParagraphComponent } from 'src/app/shared/paragraph/paragraph.component';
import { SocialMediaComponent } from 'src/app/shared/social-media/social-media.component';

@Component({
  selector: 'v1-app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class V1HeaderComponent
  extends DynamicComponentShared
  implements OnInit
{
  @Input('data') dataInput: any;
  @ViewChildren('container', {
    read: ViewContainerRef,
  })
  containers?: QueryList<ViewContainerRef>;
  dark = false;

  constructor() {
    let componentsListLoading: IDynamicComponent[] = [
      { name: 'ImageComponent', element: ImageComponent, group: 'left' },
      {
        name: 'ParagraphComponent',
        element: ParagraphComponent,
        group: 'left',
      },
      { name: 'LinkComponent', element: LinkComponent, group: 'left' },
      {
        name: 'SocialMediaComponent',
        element: SocialMediaComponent,
        group: 'right',
      },
    ];

    super(componentsListLoading);
  }

  ngOnInit(): void {
    let timer = setInterval(() => {
      if (this.containers) {
        clearInterval(timer);
        this.loadingComponents(this.containers, this.dataInput);
      }
    }, 500);

    this.dark = this.getSettedDarkMode();
    if (!localStorage.getItem('theme')) this.setTheme('theme-blue-orange');
  }

  getSettedDarkMode() {
    if (localStorage.getItem('dark-mode')) {
      if (localStorage.getItem('dark-mode') == 'dark-mode') {
        this.setDarkTheme(true);
        return true;
      } else {
        this.setDarkTheme(false);
        return false;
      }
    } else {
      this.setDarkTheme(false);
      return false;
    }
  }

  setTheme(theme: string) {
    const body = document.body;
    const bodyClassList = body.classList;

    bodyClassList.forEach((classList) =>
      classList.indexOf('theme') !== -1 ? bodyClassList.remove(classList) : ''
    );

    bodyClassList.add(theme);
    localStorage.removeItem('theme');
    localStorage.setItem('theme', theme);
  }

  setDarkTheme(dark: boolean) {
    const body = document.body;
    const bodyClassList = body.classList;

    bodyClassList.forEach((classList) =>
      classList.indexOf('mode') !== -1 ? bodyClassList.remove(classList) : ''
    );

    bodyClassList.add(dark ? 'dark-mode' : 'light-mode');
    localStorage.removeItem('dark-mode');
    localStorage.setItem('dark-mode', dark ? 'dark-mode' : 'light-mode');
  }
}
