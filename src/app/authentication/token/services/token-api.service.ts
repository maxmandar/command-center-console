import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { NGXLogger } from 'ngx-logger';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TokenApiService {
  private readonly authentication_base_url = `${environment.authentication_base_url}`;

  constructor(
    private http: HttpClient,
    private logger: NGXLogger
  ) { }

  refreshAccessToken(refreshToken: string): Observable<string> {
    this.logger.debug('Refreshing access token');
    return this.http.post<{ accessToken: string }>(
      `${this.authentication_base_url}refresh-token/`, 
      { refreshToken }
    ).pipe(
      map(response => {
        this.logger.debug('Received new access token:', response.accessToken);
        return response.accessToken;
      }),
      tap(accessToken => {
        // If you need to do anything with the new access token, do it here
      })
    );
  }
}
