import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { map, catchError, switchMap, finalize, filter, take } from 'rxjs/operators';
import { AppAuthService } from './app-auth.service';
import { Request } from 'selenium-webdriver/http';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {
  
  constructor(public auth: AppAuthService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {    
    const token: string = this.auth.getAccessToken();
    
    return next.handle(this.addHeaders(request, token)).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status == 401) {
          return this.handleError(request, next);
        } else {
          return throwError(error);
        }
      })
    );
  }

  addHeaders(request: HttpRequest<any>, token: string): HttpRequest<any> {
    return request.clone({ 
      setHeaders: { 
        'Authorization': 'Bearer ' + token,
        // 'Content-Type': 'application/json' 
      }
    });
  }

  handleError(request: HttpRequest<any>, next: HttpHandler) {
    console.log("Waiting for refresh token...");
    return this.auth.refresh().pipe(
      switchMap((newTokens) => {
        this.auth.setTokens(newTokens);
        return next.handle(this.addHeaders(request, newTokens.accessToken));      
      }));
  }
}