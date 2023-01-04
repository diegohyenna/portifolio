import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { ApiDgsiteService } from 'src/app/services/api-dgsite.service';

@Injectable({
  providedIn: 'root',
})
export class AboutService {
  constructor(private API: ApiDgsiteService) {}

  getAbout() {
    return this.API.getAll('about');
  }

  save(data: any) {
    let items = {
      id: data.id,
      publish: data.publish,
      data: { profile: { ...data.profile }, content: { ...data.content } },
    };
    if (items.id) {
      return this.API.update('about', data);
    } else {
      return this.API.save('about', data);
    }
  }
}
