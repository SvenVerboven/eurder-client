import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { BlockUIModule } from 'primeng/blockui';
import { RadioButtonModule } from 'primeng/radiobutton';
import { DividerModule } from 'primeng/divider';
import { CardModule } from 'primeng/card';
import { RatingModule } from 'primeng/rating';

import { SurveyRoutingModule } from './survey-routing.module';
import { CreatePersonComponent } from './components/create-person/create-person.component';
import { SurveyComponent } from './containers/survey/survey.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { SurveySubjectComponent } from './components/survey-subject/survey-subject.component';
import { DashboardComponent } from './containers/dashboard/dashboard.component';
import { SurveyDashboardComponent } from './components/survey-dashboard/survey-dashboard.component';
import { ChartModule } from 'primeng/chart';
import { TitleComponent } from './components/title/title.component';
import { DialogModule } from 'primeng/dialog';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { PersonTableComponent } from './components/person-table/person-table.component';
import { AdminComponent } from './containers/admin/admin.component';
import { TableModule } from 'primeng/table';
import { SurveyTableComponent } from './components/survey-table/survey-table.component';
import { SurveySubjectTableComponent } from './components/survey-subject-table/survey-subject-table.component';

@NgModule({
  declarations: [
    CreatePersonComponent,
    SurveyComponent,
    SpinnerComponent,
    SurveySubjectComponent,
    DashboardComponent,
    SurveyDashboardComponent,
    TitleComponent,
    TitleComponent,
    PersonTableComponent,
    AdminComponent,
    SurveyTableComponent,
    SurveySubjectTableComponent,
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
    ChartModule,
    DialogModule,
    ConfirmDialogModule,
    TableModule,
  ],
  exports: [TitleComponent, PersonTableComponent],
})
export class SurveyModule {}
