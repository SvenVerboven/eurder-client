import { Observable } from 'rxjs';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { SurveySubject } from '../models/survey-subject.model';
import { environment } from '../../../environments/environment.prod';

const SURVEY_SUBJECTS_URL = `/surveysubjects`;

@Injectable({
  providedIn: 'root',
})
export class SurveySubjectHttpService {
  constructor(private readonly http: HttpClient) {}

  findAll(): Observable<SurveySubject[]> {
    return this.http.get<SurveySubject[]>(`${environment.url.baseUrl}${SURVEY_SUBJECTS_URL}`);
  }

  deleteById(id: number): Observable<void> {
    return this.http.delete<void>(`${environment.url.baseUrl}${SURVEY_SUBJECTS_URL}/${id}`);
  }

  save(surveySubject: SurveySubject): Observable<SurveySubject> {
    return this.http.post<SurveySubject>(`${environment.url.baseUrl}${SURVEY_SUBJECTS_URL}`, surveySubject);
  }
}
