import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { AuthenticationModule } from '../authentication/authentication.module';

import { LayoutRoutingModule } from './layout-routing.module';
import { LandingComponent } from './landing/components/landing/landing.component';
import { HeaderComponent } from './header/components/header/header.component';
import { FooterComponent } from './footer/components/footer/footer.component';
import { PageNotFoundComponent } from './page-not-found/components/page-not-found/page-not-found.component';
import { SideNavComponent } from './side-nav/components/side-nav/side-nav.component';


@NgModule({
  declarations: [
    LandingComponent,
    HeaderComponent,
    FooterComponent,
    PageNotFoundComponent,
    SideNavComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    AngularMaterialModule,
    AuthenticationModule
  ]
})
export class LayoutModule { }
