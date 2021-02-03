import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';

import { CalendarComponent } from './calendar/calendar.component';
import { HomeUserComponent } from './home-user/home-user.component';
import { MaterialModule } from '../material/material.module'

import { FullCalendarModule } from '@fullcalendar/angular'; 
import dayGridPlugin from '@fullcalendar/daygrid'; 
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';

FullCalendarModule.registerPlugins([ 
  dayGridPlugin,
  interactionPlugin,
  timeGridPlugin
]);

@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule,
    FullCalendarModule,
    MaterialModule
  ],
  declarations: [CalendarComponent, HomeUserComponent],
  entryComponents:[]
  
})
export class UserModule { }
