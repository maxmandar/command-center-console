import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RocketRoutingModule } from './rocket-routing.module';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { ReactiveFormsModule } from '@angular/forms'; 
import { FormsModule } from '@angular/forms';

import { TelemetryModule } from '../telemetry/telemetry.module';

import { RocketSearchComponent } from './rocket-search/components/rocket-search/rocket-search.component';
import { LandingComponent } from './landing/components/landing/landing.component';


@NgModule({
  declarations: [
    RocketSearchComponent,
    LandingComponent
  ],
  imports: [
    CommonModule,
    RocketRoutingModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    FormsModule,
    TelemetryModule
  ],
  exports: [
    RocketSearchComponent
  ]
})
export class RocketModule { }
