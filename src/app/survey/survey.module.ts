import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SurveyRoutingModule} from './survey-routing.module';
import {HeaderComponent} from "./components/header/header.component";
import {CreatePersonComponent} from "./components/create-person/create-person.component";
import {ReactiveFormsModule} from "@angular/forms";
import {ButtonModule} from "primeng/button";
import {InputTextModule} from "primeng/inputtext";
import {SurveyComponent} from "./containers/survey.component";


@NgModule({
  declarations: [HeaderComponent, CreatePersonComponent, SurveyComponent],
  imports: [
    CommonModule,
    SurveyRoutingModule,
    ReactiveFormsModule,
    ButtonModule,
    InputTextModule
  ]
})
export class SurveyModule {
}
