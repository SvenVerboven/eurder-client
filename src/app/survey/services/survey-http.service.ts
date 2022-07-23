import { Observable } from 'rxjs';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment.prod';
import { Survey } from '../models/survey.model';

@Injectable({
  providedIn: 'root',
})
export class SurveyHttpService {
  constructor(private readonly http: HttpClient) {}

  save(survey: Survey): Observable<Survey> {
    return this.http.post<Survey>(`${environment.url.baseUrl}/surveys`, survey);
  }

  findAll(): Observable<Survey[]> {
    return this.http.get<Survey[]>(`${environment.url.baseUrl}/surveys`);
  }
}
