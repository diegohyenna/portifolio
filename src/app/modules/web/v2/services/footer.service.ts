import { Injectable } from '@angular/core';
import { V2ApiService } from 'src/app/services/api-v2.service';

@Injectable({
  providedIn: 'root',
})
export class V2FooterService {
  constructor(private API: V2ApiService) {}

  getAll(version: string) {
    return this.API.getAllPublished(`v2/footer/${version}`);
  }
}
