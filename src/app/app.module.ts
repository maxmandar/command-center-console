import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http'; // <-- This is required for the HTTP client to work  

// third party modules
import { LoggerModule, NgxLoggerLevel } from 'ngx-logger';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { NgChartsModule } from 'ng2-charts';


//Project modules

import { EntryPointModule } from './entry-point/entry-point.module';
import { AuthenticationModule } from './authentication/authentication.module';
import { LayoutModule } from './layout/layout.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LoggerModule.forRoot({serverLoggingUrl: '/api/logs', level: NgxLoggerLevel.DEBUG, serverLogLevel: NgxLoggerLevel.OFF}),
    AngularMaterialModule,
    HttpClientModule,
    NgChartsModule,
    EntryPointModule,
    AuthenticationModule,
    LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
