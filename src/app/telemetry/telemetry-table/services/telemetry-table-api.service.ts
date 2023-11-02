import { Injectable } from '@angular/core';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';
import { Observable } from 'rxjs';
import { Telemetry } from '../interfaces/telemetry-table';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class TelemetryTableApiService {
  private socket$!: WebSocketSubject<any>;
  private webSocketUrl: string = environment.telemetry_websocket_base_url + 'rocket1/stage1/';




  public connect(): void {
    if (!this.socket$ || this.socket$.closed) {
      this.socket$ = webSocket(this.webSocketUrl);
      // Add error and close logic as needed.
    }
  }

  public getTelemetryData(): Observable<any> {
    return this.socket$.asObservable();
  }
}
