import { Location } from '@angular/common';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { V1ApiService } from 'src/app/services/api-v1.service';

@Injectable({
  providedIn: 'root',
})
export class FooterService {
  constructor(private location: Location, private API: V1ApiService) {}

  getFooter() {
    return this.API.getPublished('footer').pipe(map((res) => res.data));
  }
}
