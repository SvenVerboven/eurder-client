import { SurveySubject } from './survey-subject.model';
import { Question } from './question.model';

export interface Score {
  id?: number;
  value: number;
  surveySubject: SurveySubject;
  question: Question;
}
