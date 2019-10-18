import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpertiseRoutingModule } from './expertise-routing.module';
import { JobsComponent } from './jobs/jobs.component';
import { InterestsComponent } from './interests/interests.component';
import { OtherComponent } from './other/other.component';
import { ResponsibilityComponent } from './responsibility/responsibility.component';
import { HomeComponent } from './home/home.component';
import { DataTablesModule } from 'angular-datatables';


@NgModule({
  declarations: [JobsComponent, InterestsComponent, OtherComponent, ResponsibilityComponent, HomeComponent],
  imports: [
    CommonModule,
    DataTablesModule,
    ExpertiseRoutingModule
  ]
})
export class ExpertiseModule { }
