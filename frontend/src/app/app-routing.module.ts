import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeAdminComponent } from './admin/home-admin/home-admin.component';
import { HomeAdmin2Component } from './admin/home-admin2/home-admin2.component';
import { LoginComponent } from './login/login.component';
import { HomeManagerComponent } from './manager/home-manager/home-manager.component';
import { HomeManager2Component } from './manager/home-manager2/home-manager2.component';
import { PdfPageComponent } from './pdf-page/pdf-page.component';
import { RegisterComponent } from './register/register.component';
import { HomeUserComponent } from './user/home-user/home-user.component';

const routes: Routes = [{
  path: 'login',
  component: LoginComponent
},
{
  path: 'register',
  component: RegisterComponent
},
{
  path: 'user',
  component: HomeUserComponent
},
{
  path: 'manager',
  component: HomeManagerComponent
},
{
  path: 'manager2',
  component: HomeManager2Component
},
{
  path: 'admin',
  component: HomeAdminComponent
},
{
  path: 'admin2',
  component: HomeAdmin2Component
},
{
  path: 'pdf-page',
  component: PdfPageComponent
},
{
  path: '**',
  redirectTo: 'login',
  pathMatch: 'full'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }