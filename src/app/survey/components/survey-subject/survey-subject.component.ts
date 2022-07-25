import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

import { SurveySubject } from '../../models/survey-subject.model';
import { Score } from '../../models/score.model';
import { Question } from '../../models/question.model';

@Component({
  selector: 'app-survey-subject',
  templateUrl: './survey-subject.component.html',
  styleUrls: ['./survey-subject.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SurveySubjectComponent {
  @Input() surveySubjects: SurveySubject[];
  @Output() onSaveSurvey = new EventEmitter<Score[]>();
  surveySubjectSequence = 0;
  questionSequence = 0;
  selectedAnswer: any;
  labelBack = 'Vorige';
  labelNext = 'Volgende';
  labelSubmit = 'Bevestig';
  score = 0;
  scores: Score[] = [];

  get previousQuestionAvailable(): boolean {
    return !(this.questionSequence === 0 && this.surveySubjectSequence === 0);
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
    let score = this.findScore(
      this.surveySubjects[this.surveySubjectSequence],
      this.surveySubjects[this.surveySubjectSequence].questions[this.questionSequence],
    );
    if (!score) {
      this.scores.push({
        value: this.score,
        surveySubject: surveySubject,
        question: question,
      });
    } else {
      score.value = this.score;
    }
    if (this.nextQuestionAvailable) {
      this.questionSequence++;
      this.score = this.findScoreValue(
        this.surveySubjects[this.surveySubjectSequence],
        this.surveySubjects[this.surveySubjectSequence].questions[this.questionSequence],
      );
      return;
    }
    if (this.nextSurveySubjectAvailable) {
      this.surveySubjectSequence++;
      this.questionSequence = 0;
      this.score = this.findScoreValue(
        this.surveySubjects[this.surveySubjectSequence],
        this.surveySubjects[this.surveySubjectSequence].questions[this.questionSequence],
      );
    } else {
      this.onSaveSurvey.next(this.scores);
    }
  }

  onBack(): void {
    if (!this.previousQuestionAvailable) {
      return;
    }
    if (this.questionSequence === 0 && this.surveySubjectSequence !== 0) {
      this.surveySubjectSequence--;
      this.questionSequence = this.surveySubjects[this.surveySubjectSequence].questions.length - 1;
    } else {
      this.questionSequence--;
    }
    let scoreValue = this.findScoreValue(
      this.surveySubjects[this.surveySubjectSequence],
      this.surveySubjects[this.surveySubjectSequence].questions[this.questionSequence],
    );
    if (!scoreValue) {
      this.score = 0;
    } else {
      this.score = scoreValue;
    }
  }

  private findScoreValue(surveySubject: SurveySubject, question: Question): number | undefined {
    if (!surveySubject || !question || !this.scores) {
      return undefined;
    }
    let score = this.scores.find(
      (s: Score) => s.surveySubject.id === surveySubject.id && s.question.id === question.id,
    );
    if (!score) {
      return undefined;
    }
    return score.value;
  }

  private findScore(surveySubject: SurveySubject, question: Question): Score | undefined {
    if (!surveySubject || !question || !this.scores) {
      return undefined;
    }
    return this.scores.find(
      (score: Score) => score.surveySubject.id === surveySubject.id && score.question.id === question.id,
    );
  }
}
