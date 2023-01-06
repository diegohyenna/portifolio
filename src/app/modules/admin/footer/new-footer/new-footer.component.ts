import { Component, OnInit } from '@angular/core';
import { AlertService } from 'src/app/components/shared/alert/alert.service';
import { onSave } from '../../helpers/components';
import { FooterService } from '../footer.service';

@Component({
  selector: 'app-new-footer',
  templateUrl: './new-footer.component.html',
  styleUrls: ['./new-footer.component.sass'],
})
export class NewFooterComponent implements OnInit {
  constructor(
    private footerService: FooterService,
    private alertService: AlertService
  ) {}

  ngOnInit(): void {}

  onSave(json: any) {
    let items = {
      publish: json.publish,
      data: { ...json.data },
    };
    onSave(items, this.footerService, this.alertService);
  }
}
