import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GroundStationRoutingModule } from './ground-station-routing.module';
import { GroundStationStatusComponent } from './ground-station-status/components/ground-station-status/ground-station-status.component';

import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { LandingComponent } from './landing/components/landing/landing.component';


@NgModule({
  declarations: [
    GroundStationStatusComponent,
    LandingComponent
  ],
  imports: [
    CommonModule,
    GroundStationRoutingModule,
    AngularMaterialModule
  ],
  exports: [
    GroundStationStatusComponent
  ]
})
export class GroundStationModule { }
