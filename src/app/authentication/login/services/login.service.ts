import { Injectable } from '@angular/core';
import { LoginApiService } from './login-api.service';
import { catchError, tap } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { NGXLogger } from 'ngx-logger';

import { TokenService } from '../../token/services/token.service';



@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private loginApiService: LoginApiService,
    private tokenService: TokenService,  
    private logger: NGXLogger
  ) {}

  login(username: string, password: string) {
    this.logger.debug('Login method called with:', { username, password });
    return this.loginApiService.login(username, password).pipe(
      tap(response => {
        this.logger.info('Login successful', response);
        this.tokenService.setTokens(response.access_token, response.refresh_token, response.expires_in); 
      }),
      catchError(error => {
        this.logger.error('Login failed', error);
        return throwError(() => error);
      })
    );
  }
}
