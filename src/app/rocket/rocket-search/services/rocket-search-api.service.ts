import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Rocket } from '../interfaces/rocket-search';

import { environment } from '../../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class RocketSearchApiService {

   constructor(private http: HttpClient) { }

   getRockets(): Observable<Rocket[]> {

    return this.http.get<Rocket[]>(environment.rocket_base_url);
  }

}
