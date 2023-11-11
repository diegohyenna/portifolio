import { Component, OnInit } from '@angular/core';
import { AlertService } from 'src/app/shared/alert/alert.service';

import { onUpdate } from '../helpers/components';
import { ProjectService } from './project.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
})
export class ProjectComponent implements OnInit {
  json = [];

  constructor(
    private projectService: ProjectService,
    private alertService: AlertService
  ) {}

  ngOnInit(): void {
    this.projectService
      .getProject()
      .then((result: any) => {
        this.json = result;
      })
      .catch((err) => {
        this.json = [];
      });
  }

  onSave(json: any) {
    let items = {
      ...json,
      id: json.id,
      publish: json.publish,
      updatedAt: new Date().toISOString(),
    };
    onUpdate(items, this.projectService, this.alertService);
  }
}
