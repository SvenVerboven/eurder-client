import { Subject, takeUntil } from 'rxjs';

import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnDestroy, Output } from '@angular/core';
import { Router } from '@angular/router';

import { SurveySubject } from '../../models/survey-subject.model';
import { Score } from '../../models/score.model';
import { Question } from '../../models/question.model';
import { SurveyHttpService } from '../../services/survey-http.service';

@Component({
  selector: 'app-survey-subject',
  templateUrl: './survey-subject.component.html',
  styleUrls: ['./survey-subject.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SurveySubjectComponent implements OnDestroy {
  @Input() surveySubjects: SurveySubject[];
  @Output() onSaveSurvey = new EventEmitter<Score[]>();
  private readonly destroy$ = new Subject<void>();
  surveySubjectSequence = 0;
  questionSequence = 0;
  selectedAnswer: any;
  labelNext = 'Volgende';
  labelSubmit = 'Bevestig';
  score = 0;
  scores: Score[] = [];

  constructor(private readonly router: Router, private readonly surveyHttpService: SurveyHttpService) {}

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  get nextQuestionAvailable(): boolean {
    if (!this.surveySubjects) {
      return false;
    }
    return this.questionSequence < this.surveySubjects[this.surveySubjectSequence].questions.length - 1;
  }

  get nextSurveySubjectAvailable(): boolean {
    if (!this.surveySubjects) {
      return false;
    }
    return this.surveySubjectSequence < this.surveySubjects.length - 1;
  }

  onNext(surveySubject: SurveySubject, question: Question): void {
    this.scores.push({
      value: this.score,
      surveySubject: surveySubject,
      question: question,
    });
    this.score = 0;
    if (this.nextQuestionAvailable) {
      this.questionSequence++;
      return;
    }
    if (this.nextSurveySubjectAvailable) {
      this.surveySubjectSequence++;
      this.questionSequence = 0;
    } else {
      this.onSaveSurvey.next(this.scores);
    }
  }
}
