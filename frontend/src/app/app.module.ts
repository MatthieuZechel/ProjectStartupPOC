import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

// my components

import { CalendarComponent } from './calendar/calendar.component';
import { HomeUserComponent } from './user/home-user/home-user.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

// calendar

import { FullCalendarModule } from '@fullcalendar/angular'; 
import dayGridPlugin from '@fullcalendar/daygrid'; 
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';
import { HomeManagerComponent } from './manager/home-manager/home-manager.component';
import { HomeManager2Component } from './manager/home-manager2/home-manager2.component';
import { HomeAdminComponent } from './admin/home-admin/home-admin.component';
import { HomeAdmin2Component } from './admin/home-admin2/home-admin2.component';
import { AddTimeDialogComponent } from './user/add-time-dialog/add-time-dialog.component';

FullCalendarModule.registerPlugins([ 
  dayGridPlugin,
  interactionPlugin,
  timeGridPlugin
]);

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    CalendarComponent,
    HomeUserComponent,
    HomeManagerComponent,
    HomeManager2Component,
    HomeAdminComponent,
    HomeAdmin2Component,
    AddTimeDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FullCalendarModule,
    MaterialModule,
    HttpClientModule,
    FlexLayoutModule
  ],
  entryComponents: [AddTimeDialogComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
