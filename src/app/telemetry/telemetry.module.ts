import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TelemetryRoutingModule } from './telemetry-routing.module';


import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { NgChartsModule } from 'ng2-charts';
import { TelemetryHistoryComponent } from './telemetry-history/components/telemetry-history/telemetry-history.component';
import { TelemetryHowLongAgoPipe } from './telemetry-how-long-ago/pipes/telemetry-how-long-ago.pipe';
import { TelemetryLiveComponent } from './telemetry-live/components/telemetry-live/telemetry-live.component';
import { TelemetryLiveChartComponent } from './telemetry-live/components/telemetry-live-chart/telemetry-live-chart.component';
import { TelemetryLiveStatusComponent } from './telemetry-live/components/telemetry-live-status/telemetry-live-status.component';
import { TelemetryActionDialogComponent } from './telemetry-action-dialog/components/telemetry-action-dialog/telemetry-action-dialog.component';
import { TelemetryLandingComponent } from './telemetry-landing/components/telemetry-landing/telemetry-landing.component';

@NgModule({
  declarations: [
    TelemetryHistoryComponent,
    TelemetryHowLongAgoPipe,
    TelemetryLiveComponent,
    TelemetryLiveChartComponent,
    TelemetryLiveStatusComponent,
    TelemetryActionDialogComponent,
    TelemetryLandingComponent
  ],
  imports: [
    CommonModule,
    TelemetryRoutingModule,
    AngularMaterialModule,
    NgChartsModule
  ],
  exports: [
    TelemetryHistoryComponent,
    TelemetryLiveComponent,
    TelemetryLiveChartComponent,
    TelemetryLiveStatusComponent,
    TelemetryLandingComponent

    
  ]
})
export class TelemetryModule { }
