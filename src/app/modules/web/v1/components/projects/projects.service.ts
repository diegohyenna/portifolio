import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { V1ApiService } from 'src/app/services/api-v1.service';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  private categories: any = [];
  private technologies: any = [];

  constructor(private API: V1ApiService) {}

  getProjects() {
    return this.API.getPublished('project').pipe(
      map((item: any) =>
        item.data.sort((a: any, b: any) => (a.order > b.order ? 1 : -1))
      )
    );
  }

  getFilters(projects: any) {
    this.filtersGenerate(projects);
    return { categories: this.categories, technologies: this.technologies };
  }

  filtersGenerate(projects: any) {
    projects.map((item: any) => {
      if (
        !this.categories.find((category: string) => item.category === category)
      ) {
        this.categories.push(item.category);
      }

      item.body?.technologies.map((technology: any) => {
        if (!this.technologies.find((tech: string) => tech === technology)) {
          this.technologies.push(technology);
        }
      });
    });
  }
}
