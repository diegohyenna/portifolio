import { Injectable } from '@angular/core';
import { V1ApiService } from 'src/app/services/api-v1.service';

@Injectable({
  providedIn: 'root',
})
export class FooterService {
  constructor(private API: V1ApiService) {}

  getFooter() {
    return this.API.selectAll('footer');
  }

  save(data: any) {
    return this.API.add('footer', data);
  }

  update(data: any) {
    return this.API.set('footer', data.id, data);
  }
}
