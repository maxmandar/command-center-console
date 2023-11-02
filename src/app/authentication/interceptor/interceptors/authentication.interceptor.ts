import { Injectable } from '@angular/core';
import { take, switchMap, catchError } from 'rxjs/operators';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { TokenService } from '../../token/services/token.service';
import { NGXLogger } from 'ngx-logger';
import { Router } from '@angular/router';

@Injectable()
export class AuthenticationInterceptor implements HttpInterceptor {

  constructor(
    private tokenService: TokenService,
    private logger: NGXLogger,
    private router: Router) { } // Inject the Router

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.logger.debug('AuthInterceptor: Intercepting request', request);

    // Check if the request is for the login endpoint
    if (request.url.includes('/login')) {
      this.logger.debug('AuthInterceptor: Bypassing interceptor for login request');
      return next.handle(request);
    }

    return this.tokenService.getAccessToken().pipe(
      take(1),
      switchMap(accessToken => {
        if (accessToken) {
          // Clone the request and set the new header
          const clonedRequest = request.clone({
            headers: request.headers.set('Authorization', `Bearer ${accessToken}`)
          });
          this.logger.debug('AuthInterceptor: Modified request', clonedRequest);
          return next.handle(clonedRequest);
        }
        // If there's no token, just pass the request through without modification
        this.logger.debug('AuthInterceptor: Passing through unmodified request', request);
        return next.handle(request);
      }),
      catchError((error: HttpErrorResponse) => { // Handle HTTP errors
        if (error.status === 401) {
          // If the error status is 401, redirect to login or a specific page
          this.router.navigate(['/login']); // or any other path, e.g., this.router.navigate(['/unauthorized']);
        }
        // Pass the error to the next handler
        return throwError(error);
      })
    );
  }
}
