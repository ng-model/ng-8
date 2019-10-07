import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FullComponent } from './layout/full/full.component';
import { BlankComponent } from './layout/blank/blank.component';

const routes: Routes = [
  { path: '', redirectTo: '/auth/login', pathMatch: 'full'},
    {
      path: 'auth',
      component: BlankComponent,
      loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
    },
    { 
      path: 'aboutMe',
      component: FullComponent,
      loadChildren: () => import('./expertise/expertise.module').then(m => m.ExpertiseModule)
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
