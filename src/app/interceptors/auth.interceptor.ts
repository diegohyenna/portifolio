import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { V1ApiService } from '../services/api-v1.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private API: V1ApiService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    // if (!request.url.includes('/login')) {
    //   let authToken = this.API.getToken();
    //   const authReq = request.clone({
    //     body: request.body,
    //     headers: request.headers.set('Authorization', `Bearer ` + authToken),
    //   });
    //   return next.handle(authReq);
    // }
    // return next.handle(request);
    return next.handle(request);
  }
}
