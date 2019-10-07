import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JobsComponent } from './jobs/jobs.component';
import { InterestsComponent } from './interests/interests.component';
import { HomeComponent } from './home/home.component';
import { OtherComponent } from './other/other.component';
import { ResponsibilityComponent } from './responsibility/responsibility.component';

const eroutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'jobs', component: JobsComponent },
  { path: 'interests', component: InterestsComponent },
  { path: 'duties', component: ResponsibilityComponent },
  { path: 'other', component: OtherComponent }
];
@NgModule({
  imports: [RouterModule.forChild(eroutes)],
  exports: [RouterModule]
})
export class ExpertiseRoutingModule { }
