import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

import { Survey } from '../../models/survey.model';

@Component({
  selector: 'app-survey-table',
  templateUrl: './survey-table.component.html',
  styleUrls: ['./survey-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SurveyTableComponent {
  @Input() surveys: Survey[];
  @Output() onRefresh = new EventEmitter<void>();
  @Output() onDelete = new EventEmitter<Survey>();
}
