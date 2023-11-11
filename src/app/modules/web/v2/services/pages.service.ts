import { Injectable, EventEmitter } from '@angular/core';
import { V2ApiService } from 'src/app/services/api-v2.service';

@Injectable({
  providedIn: 'root',
})
export class V2PagesService {
  private currentUrl = new EventEmitter<string>();

  constructor(private API: V2ApiService) {}

  getAllPages() {
    return this.API.getAllPages(`v2/`);
  }

  setCurrentUrl(url: string) {
    this.currentUrl.emit(this.getLastPathInUrl(url));
  }

  getCurrentUrl() {
    return this.currentUrl;
  }

  private getLastPathInUrl(url: string) {
    return url.substr(url.lastIndexOf('/'), url.length);
  }
}
