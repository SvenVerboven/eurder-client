import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

import { SurveySubject } from '../../models/survey-subject.model';

@Component({
  selector: 'app-survey-subject-table',
  templateUrl: './survey-subject-table.component.html',
  styleUrls: ['./survey-subject-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SurveySubjectTableComponent {
  @Input() surveySubjects: SurveySubject[];
  @Output() onRefresh = new EventEmitter<void>();
  @Output() onDelete = new EventEmitter<SurveySubject>();
  @Output() onSave = new EventEmitter<void>();
  labelCreate = 'Creëer';
}
