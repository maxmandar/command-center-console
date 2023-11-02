import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { LandingComponent } from './landing/components/landing/landing.component';
import { TelemetryModule } from '../telemetry/telemetry.module';

import { AngularMaterialModule } from '../angular-material/angular-material.module';

//project
import { RocketModule } from '../rocket/rocket.module';
import { GroundStationModule } from '../ground-station/ground-station.module';

@NgModule({
  declarations: [
    LandingComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    RocketModule,
    GroundStationModule,
    TelemetryModule,
    AngularMaterialModule
  ]
})
export class DashboardModule { }
