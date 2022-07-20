import { Observable, of } from 'rxjs';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { SurveySubject } from '../models/survey-subject.model';
import { environment } from '../../../environments/environment.prod';
import { surveySubjects } from '../../testing/testing-utils';

@Injectable({
  providedIn: 'root',
})
export class SurveySubjectHttpService {
  constructor(private readonly http: HttpClient) {}

  findSurveySubjects(): Observable<SurveySubject[]> {
    return this.http.get<SurveySubject[]>(`${environment.url.baseUrl}/surveysubjects`);
    // TODO remove
    // return of(surveySubjects);
  }
}
