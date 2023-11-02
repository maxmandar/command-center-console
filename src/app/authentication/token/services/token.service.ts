import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable,of } from 'rxjs';
import { tap, map } from 'rxjs/operators';  // Import map operator
import { NGXLogger } from 'ngx-logger';


import { TokenApiService } from './token-api.service'; // Import the API service

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  private accessTokenSubject = new BehaviorSubject<string | null>(null);
  private refreshToken: string | null = null;

  constructor(
    private logger: NGXLogger, 
    private tokenApiService: TokenApiService,  // Inject TokenApiService
    
    ) { }

  setTokens(accessToken: string, refreshToken: string, expiresIn: number) {
    this.logger.debug('Setting tokens:', { accessToken, refreshToken });
    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('refreshToken', refreshToken);
    
    const expirationDate = new Date().getTime() + expiresIn * 1000; // Convert expiresIn (seconds) to milliseconds
    localStorage.setItem('tokenExpiration', expirationDate.toString());
    this.accessTokenSubject.next(accessToken);
    this.refreshToken = refreshToken;
  }

  getAccessToken(): Observable<string | null> {
    const accessToken = localStorage.getItem('accessToken');
    return of(accessToken);
    this.logger.debug('Getting access token');
    return this.accessTokenSubject.asObservable();
  }

  refreshAccessToken(): Observable<string> {
    if (!this.refreshToken) {
      this.logger.error('No refresh token available');
      throw new Error('No refresh token available');
    }
  
    this.logger.debug('Requesting to refresh access token');
    return this.tokenApiService.refreshAccessToken(this.refreshToken).pipe(
      tap(accessToken => {
        this.logger.debug('Access token refreshed successfully');
        this.accessTokenSubject.next(accessToken);
      })
    );
  }
  
}
