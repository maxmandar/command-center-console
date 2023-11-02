import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { NGXLogger } from 'ngx-logger';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class LoginApiService {

  private readonly authentication_base_url = `${environment.authentication_base_url}`;
  private readonly loginEndpoint = 'login/';



  constructor(
    private http: HttpClient,
    private logger: NGXLogger
  ) { }


login(username: string, password: string): Observable<any> {
    const payload = { username, password };
    const loginUrl = this.getUrl(this.loginEndpoint);

    return this.http.post<any>(loginUrl, payload).pipe(
      catchError((error: HttpErrorResponse) => {
        const errorMsg = `Login failed: ${error.message}`;
        this.logger.error(errorMsg, error);
        return throwError(() => error);
      })
    );
  }

  private getUrl(loginEndpoint: string): string {
    return `${this.authentication_base_url}${loginEndpoint}`;
  }


}
