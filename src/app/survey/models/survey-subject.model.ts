import { Question } from './question.model';

export interface SurveySubject {
  id?: number;
  name: string;
  sequence?: number;
  questions?: Question[];
}
