import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { StorageService } from '../services/storage.service';
import { Constants } from '../utils/constants';
import { tap } from 'rxjs/operators';

@Injectable()
export class HttpAuthInterceptor implements HttpInterceptor {

  constructor(private storageService: StorageService,
    private router: Router,
    private snackBar: MatSnackBar) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    var jwtToken = this.storageService.getLoggedInUser() ? this.storageService.getLoggedInUser().jwtToken : '';
    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${jwtToken}`
      }
    });


    return next.handle(request).pipe(tap(
      _ => { },
      error => {
          if (error instanceof HttpErrorResponse) {
              if (error.status === 401) {
                  this.storageService.clear();
                  this.router.navigate(['/login']);
              } else if (error.status === 400) {
                  this.snackBar.open(error.error, '', { duration: Constants.SECONDS_FOR_SNACKBAR, panelClass: ['red-snackbar'] });
              } else {
                  this.snackBar.open(`An error has occurred ${error.error}`, '', { duration: Constants.SECONDS_FOR_SNACKBAR, panelClass: ['red-snackbar'] });
              }
          }
      }
  ));;
  }
}