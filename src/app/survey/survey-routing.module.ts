import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {SurveyComponent} from "./containers/survey.component";

const routes: Routes = [
  {path: '', component: SurveyComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SurveyRoutingModule {
}
