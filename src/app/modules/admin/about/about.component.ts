import { Component, OnInit } from '@angular/core';
import { AlertService } from 'src/app/shared/alert/alert.service';

import { onUpdate } from '../helpers/components';
import { AboutService } from './about.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  json = [];

  constructor(
    private aboutService: AboutService,
    private alertService: AlertService
  ) {}

  ngOnInit(): void {
    this.aboutService
      .getAbout()
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
    onUpdate(items, this.aboutService, this.alertService);
  }
}
