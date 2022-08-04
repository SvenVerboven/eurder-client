import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SurveyComponent } from './containers/survey/survey.component';
import { DashboardComponent } from './containers/dashboard/dashboard.component';
import { AdminComponent } from './containers/admin/admin.component';

const routes: Routes = [
  { path: '', component: SurveyComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'admin', component: AdminComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SurveyRoutingModule {}
