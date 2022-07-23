import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-survey-dashboard',
  templateUrl: './survey-dashboard.component.html',
  styleUrls: ['./survey-dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SurveyDashboardComponent {
  @Input() data: any;
}
