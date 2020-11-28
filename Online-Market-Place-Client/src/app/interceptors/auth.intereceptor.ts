import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StorageService } from '../services/storage.service';

@Injectable()
export class HttpAuthInterceptor implements HttpInterceptor {

  constructor(private storageService: StorageService) {}
  //noAuthorizationRequiredLinks: string[] = ['/authorize', '/assets/i18n/en-US.json'];

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
   // if (request.url !== null){ //&& (this.noAuthorizationRequired(request.url))) {
     //   return next.handle(request);
   // }
    console.log('Here1');

    var jwtToken = this.storageService.getLoggedInUser() ? this.storageService.getLoggedInUser().jwtToken : '';
    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${jwtToken}`
      }
    });

    console.log('And here');

    return next.handle(request);
  }

  noAuthorizationRequired(url: string): boolean {
    return true; //return this.noAuthorizationRequiredLinks.some(link => url.indexOf(link) >= 0);
  }
}