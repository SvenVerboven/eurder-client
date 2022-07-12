import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'survey', loadChildren: () => import('./survey/survey.module').then((m) => m.SurveyModule)},
  {path: '', redirectTo: 'survey', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
