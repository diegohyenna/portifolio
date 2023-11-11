import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { V1ApiService } from 'src/app/services/api-v1.service';

@Injectable({
  providedIn: 'root',
})
export class AboutService {
  constructor(private API: V1ApiService) {}

  getAbout() {
    return this.API.getPublished('about').pipe(map((res) => res.data));
  }
}
