import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

import { HomeUserComponent } from './home-user/home-user.component';
import { NavbarComponent } from '../navbar/navbar.component';

const routes: Routes = [
  {
    path: '',
    component: NavbarComponent,
    children: [
     { path: '', component: HomeUserComponent }
    ]
  } 
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})

export class UserRoutingModule { }
