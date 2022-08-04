import { Observable } from 'rxjs';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment.prod';
import { Survey } from '../models/survey.model';

const SURVEYS_URL = '/surveys';

@Injectable({
  providedIn: 'root',
})
export class SurveyHttpService {
  constructor(private readonly http: HttpClient) {}

  save(survey: Survey): Observable<Survey> {
    return this.http.post<Survey>(`${environment.url.baseUrl}${SURVEYS_URL}`, survey);
  }

  findAll(): Observable<Survey[]> {
    return this.http.get<Survey[]>(`${environment.url.baseUrl}${SURVEYS_URL}`);
  }

  deleteById(id: number): Observable<void> {
    return this.http.delete<void>(`${environment.url.baseUrl}${SURVEYS_URL}/${id}`);
  }
}
