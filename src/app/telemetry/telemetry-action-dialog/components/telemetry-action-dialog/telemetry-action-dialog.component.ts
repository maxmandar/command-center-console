import { Component } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { TelemetryHistory } from 'src/app/telemetry/telemetry-history/interfaces/telemetry-history';
import { TelemetryLive } from 'src/app/telemetry/telemetry-live/interfaces/telemetry-live';

type TelemetryDataType = TelemetryHistory | TelemetryLive;

@Component({
  selector: 'app-telemetry-action-dialog',
  templateUrl: './telemetry-action-dialog.component.html',
  styleUrls: ['./telemetry-action-dialog.component.css']
})
export class TelemetryActionDialogComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: { telemetry: TelemetryDataType }) { }

}
