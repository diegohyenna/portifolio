import { Injectable } from '@angular/core';
import { V1ApiService } from 'src/app/services/api-v1.service';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  constructor(private API: V1ApiService) {}

  getProject() {
    return this.API.selectAll('project').then((project: any) => {
      return project.data.sort((a: any, b: any) =>
        a.order > b.order ? 1 : -1
      );
    });
  }

  update(data: any) {
    return this.API.set('project', data.id, data);
  }

  save(data: any) {
    return this.API.add('project', data);
  }
}
