import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { MatButtonModule } from '@angular/material/button';
import { NgModule } from '@angular/core';



export class AppModule { }

bootstrapApplication(AppComponent, appConfig) 
  .catch((err) => console.error(err));
