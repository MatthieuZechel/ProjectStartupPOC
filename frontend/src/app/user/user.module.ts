import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';

import { CalendarComponent } from './calendar/calendar.component';
import { HomeUserComponent } from './home-user/home-user.component';


@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule
  ],
  declarations: [CalendarComponent, HomeUserComponent],
  entryComponents:[]
  
})
export class UserModule { }
