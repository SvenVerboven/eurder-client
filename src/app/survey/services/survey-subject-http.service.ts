import { Observable } from 'rxjs';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { SurveySubject } from '../models/survey-subject.model';
import { environment } from '../../../environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class SurveySubjectHttpService {
  constructor(private readonly http: HttpClient) {}

  findSurveySubjects(): Observable<SurveySubject[]> {
    return this.http.get<SurveySubject[]>(`${environment.url.baseUrl}/surveysubjects`);
  }
}
