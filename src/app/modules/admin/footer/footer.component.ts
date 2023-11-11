import { Component, OnInit } from '@angular/core';
import { AlertService } from 'src/app/shared/alert/alert.service';

import { onUpdate } from '../helpers/components';
import { FooterService } from './footer.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  json = [];

  constructor(
    private footerService: FooterService,
    private alertService: AlertService
  ) {}

  ngOnInit(): void {
    this.footerService
      .getFooter()
      .then((result: any) => {
        this.json = result.data;
      })
      .catch((err) => {
        this.json = [];
      });
  }

  onSave(json: any) {
    let items = {
      ...json,
      updatedAt: new Date().toISOString(),
    };
    onUpdate(items, this.footerService, this.alertService);
  }
}
