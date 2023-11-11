import { Injectable } from '@angular/core';
import { V2ApiService } from 'src/app/services/api-v2.service';

@Injectable({
  providedIn: 'root',
})
export class V2HelloService {
  constructor(private API: V2ApiService) {}

  getAll(version: string) {
    return this.API.getAll(`v2/hello/${version}`);
  }

  getAllPublished(version: string) {
    return this.API.getAllPublished(`v2/hello/${version}`);
  }

  get(version: string, id: string) {
    return this.API.get(`v2/hello/${version}/`, id);
  }
}
