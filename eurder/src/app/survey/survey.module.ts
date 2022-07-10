import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SurveyRoutingModule } from './survey-routing.module';
import { SurveyComponent } from './survey/survey.component';
import { HeaderComponent } from './components/header/header.component';
import {ButtonModule} from 'primeng/button';
import { CreatePersonComponent } from './components/create-person/create-person.component';
import {InputTextModule} from 'primeng/inputtext';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    SurveyComponent,
    HeaderComponent,
    CreatePersonComponent
  ],
  imports: [
    CommonModule,
    SurveyRoutingModule,
    ButtonModule,
    InputTextModule,
    ReactiveFormsModule
  ]
})
export class SurveyModule { }
