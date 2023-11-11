import { Component, OnInit } from '@angular/core';
import { AlertService } from 'src/app/shared/alert/alert.service';

import { onSave } from '../../helpers/components';
import { AboutService } from '../about.service';

@Component({
  selector: 'app-new-about',
  templateUrl: './new-about.component.html',
  styleUrls: ['./new-about.component.scss'],
})
export class NewAboutComponent implements OnInit {
  constructor(
    private aboutService: AboutService,
    private alertService: AlertService
  ) {}

  ngOnInit(): void {}

  onSave(json: any) {
    let items = {
      ...json,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    onSave(items, this.aboutService, this.alertService);
  }
}
