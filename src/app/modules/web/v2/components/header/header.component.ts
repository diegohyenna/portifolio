import { Component, OnInit } from '@angular/core';
import { V2PagesService } from '../../services/pages.service';
import { V2HeaderService } from '../../services/header.service';

@Component({
  selector: 'v2-app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class V2HeaderComponent implements OnInit {
  pages?: any;
  header?: any;
  openMenu = false;

  constructor(
    private pagesService: V2PagesService,
    private headerService: V2HeaderService
  ) {}

  ngOnInit(): void {
    this.pagesService.getAllPages().subscribe({
      next: (res) => {
        this.pages = res?.data;
      },
    });

    this.headerService.getAllPublished('v1').subscribe({
      next: (res) => {
        this.header = res.data[0];
      },
    });
  }

  setTheme(theme: string) {
    console.log(theme);
  }

  OpenCloseMenu(target: any) {
    target = target?.checked;
    if (target) {
      this.openMenu = true;
    } else {
      this.openMenu = false;
    }
  }

  closeMenu() {
    this.openMenu = false;
    document.getElementById('checkbox-menu')?.click();
  }
}
