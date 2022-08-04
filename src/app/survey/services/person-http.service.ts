import { Observable } from 'rxjs';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Person } from '../models/person.model';
import { environment } from '../../../environments/environment.prod';

const PERSONS_URL = '/persons';

@Injectable({
  providedIn: 'root',
})
export class PersonHttpService {
  constructor(private readonly http: HttpClient) {}

  save(person: Person): Observable<Person> {
    return this.http.post<Person>(`${environment.url.baseUrl}${PERSONS_URL}`, person);
  }

  findAll(): Observable<Person[]> {
    return this.http.get<Person[]>(`${environment.url.baseUrl}${PERSONS_URL}`);
  }

  deleteById(id: number): Observable<void> {
    return this.http.delete<void>(`${environment.url.baseUrl}${PERSONS_URL}/${id}`);
  }
}
