import { Injectable } from '@angular/core';
import { V1ApiService } from 'src/app/services/api-v1.service';

@Injectable({
  providedIn: 'root',
})
export class AboutService {
  constructor(private API: V1ApiService) {}

  getAbout() {
    return this.API.selectAll('about');
  }

  save(data: any) {
    return this.API.add('about', data);
  }

  update(data: any) {
    return this.API.set('about', data.id, data);
  }
}
