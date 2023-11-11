import { Component, OnInit } from '@angular/core';

import { ProjectsService } from './projects.service';

@Component({
  selector: 'v1-app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class V1ProjectsComponent implements OnInit {
  public projectsBackup?: [];
  public projects?: [];
  public categories = [];
  public technologies = [];

  public minimumScreenMobile = 1200;

  constructor(private projectsService: ProjectsService) {}

  ngOnInit(): void {
    this.projectsService.getProjects().subscribe((results: any) => {
      this.setProjects(results);
    });
  }

  setProjects(projects: any) {
    this.projects = projects.filter((project: any) => project.publish);

    const { categories, technologies } = this.projectsService.getFilters(
      this.projects
    );
    this.categories = categories;
    this.technologies = technologies;
  }
}
