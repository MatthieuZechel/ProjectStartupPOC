import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';

import { HomeUserComponent } from './home-user/home-user.component';
import { CalendarComponent } from './calendar/calendar.component';

const routes: Routes = [
  
  {
    path: '',
    component: HomeUserComponent,
    children: [
     {
       path: '', component: CalendarComponent
      }
    ]
  } 
  
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})

export class UserRoutingModule { }
