import { Injectable } from '@angular/core';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';
import { Observable, map } from 'rxjs';
import { TelemetryLive } from '../interfaces/telemetry-live';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class TelemetryLiveApiService {
  private socket$!: WebSocketSubject<any>;
  private webSocketUrl: string = environment.telemetry_websocket_base_url + 'rocket1/stage1/';




  public connect(): void {
    if (!this.socket$ || this.socket$.closed) {
      this.socket$ = webSocket(this.webSocketUrl);
      // Add error and close logic as needed.
    }
  }

  public isConnected(): boolean {
    return this.socket$ && !this.socket$.closed;
  }

  public getTelemetryData(): Observable<TelemetryLive> {
    return this.socket$.asObservable().pipe(
      map(data => data.telemetry_data) // <-- Transform the data here
    );
  }
}
