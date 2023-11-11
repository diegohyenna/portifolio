import { Component, OnInit } from '@angular/core';
import { AlertService } from 'src/app/shared/alert/alert.service';

import { onSave } from '../../helpers/components';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.scss'],
})
export class NewProjectComponent implements OnInit {
  constructor(
    private projectService: ProjectService,
    private alertService: AlertService
  ) {}

  ngOnInit(): void {}

  onSave(json: any) {
    let items = {
      ...json,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    onSave(items, this.projectService, this.alertService);
  }
}
