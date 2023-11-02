import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EntryPointRoutingModule } from './entry-point-routing.module';
import { LandingComponent } from './landing/components/landing/landing.component';

import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { AuthenticationModule } from '../authentication/authentication.module';


@NgModule({
  declarations: [
    LandingComponent
  ],
  imports: [
    CommonModule,
    EntryPointRoutingModule,
    AngularMaterialModule,
    AuthenticationModule
    
  ]
})
export class EntryPointModule { }
