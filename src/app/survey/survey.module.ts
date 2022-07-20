import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { BlockUIModule } from 'primeng/blockui';
import { RadioButtonModule } from 'primeng/radiobutton';
import { DividerModule } from 'primeng/divider';

import { SurveyRoutingModule } from './survey-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { CreatePersonComponent } from './components/create-person/create-person.component';
import { SurveyComponent } from './containers/survey/survey.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { SurveySubjectComponent } from './components/survey-subject/survey-subject.component';
import { DashboardComponent } from './containers/dashboard/dashboard.component';
import { RatingModule } from 'primeng/rating';
import { CardModule } from 'primeng/card';

@NgModule({
  declarations: [
    HeaderComponent,
    CreatePersonComponent,
    SurveyComponent,
    SpinnerComponent,
    SurveySubjectComponent,
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    SurveyRoutingModule,
    ReactiveFormsModule,
    ButtonModule,
    InputTextModule,
    ProgressSpinnerModule,
    BlockUIModule,
    RadioButtonModule,
    FormsModule,
    DividerModule,
    RatingModule,
    CardModule,
  ],
})
export class SurveyModule {}
