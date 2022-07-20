import { Person } from './person.model';
import { Score } from './score.model';

export interface Survey {
  id?: number;
  person?: Person;
  scores: Score[];
}
