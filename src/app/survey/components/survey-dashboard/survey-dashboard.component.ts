import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

import { Survey } from '../../models/survey.model';

@Component({
  selector: 'app-survey-dashboard',
  templateUrl: './survey-dashboard.component.html',
  styleUrls: ['./survey-dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SurveyDashboardComponent {
  @Input() title: string;
  @Input() data: any;
  @Input() surveys: Survey[];
  @Output() refreshSurveysRequested = new EventEmitter<void>();
  label = 'Refresh';

  onRefreshSurveys(): void {
    this.refreshSurveysRequested.emit();
  }
}
