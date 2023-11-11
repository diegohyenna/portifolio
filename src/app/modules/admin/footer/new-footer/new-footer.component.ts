import { Component, OnInit } from '@angular/core';
import { AlertService } from 'src/app/shared/alert/alert.service';
import { onSave } from '../../helpers/components';
import { FooterService } from '../footer.service';

@Component({
  selector: 'app-new-footer',
  templateUrl: './new-footer.component.html',
  styleUrls: ['./new-footer.component.scss'],
})
export class NewFooterComponent implements OnInit {
  constructor(
    private footerService: FooterService,
    private alertService: AlertService
  ) {}

  ngOnInit(): void {}

  onSave(json: any) {
    let items = {
      ...json,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    onSave(items, this.footerService, this.alertService);
  }
}
