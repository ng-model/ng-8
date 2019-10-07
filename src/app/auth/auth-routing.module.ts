import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';


const authroutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '404', component: NotFoundComponent }
];
@NgModule({
  imports: [RouterModule.forChild(authroutes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
