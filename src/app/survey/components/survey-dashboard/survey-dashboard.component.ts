import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

import { Survey } from '../../models/survey.model';
import { Person } from '../../models/person.model';
import { surveys } from '../../../testing/testing-utils';

@Component({
  selector: 'app-survey-dashboard',
  templateUrl: './survey-dashboard.component.html',
  styleUrls: ['./survey-dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SurveyDashboardComponent {
  @Input() data: any;
  @Input() surveys: Survey[];
  @Output() refreshSurveysRequested = new EventEmitter<void>();
  @Output() previousDoughnutRequested = new EventEmitter<number>();
  @Output() nextDoughnutRequested = new EventEmitter<number>();
  label = 'Vernieuw';
  index = 0;
  get title() {
    if (this.index === 0) {
      return 'algemene score';
    } else {
      return `Resultaat: ${this.trimTitle(surveys[0]?.scores[0]?.surveySubject?.questions[this.index - 1].text)}`;
    }
  }

  onPreviousDoughnutRequested(): void {
    if (this.index > 0) {
      this.index--;
      this.previousDoughnutRequested.emit(this.index);
    }
  }

  onNextDoughnutRequested(): void {
    if (this.index < surveys[0].scores[0].surveySubject.questions.length) {
      this.index++;
      this.nextDoughnutRequested.emit(this.index);
    }
  }

  onRefreshSurveysRequested(): void {
    this.index = 0;
    this.refreshSurveysRequested.emit();
  }

  getPersons(): string {
    return this.surveys
      .map((survey: Survey) => survey.person)
      .map((person: Person) => person.name)
      .join(', ');
  }

  private trimTitle(question: string): string {
    let strings = question.split(' ');
    let lastValue = strings[strings.length - 1];
    return lastValue.replace('?', '');
  }
}
