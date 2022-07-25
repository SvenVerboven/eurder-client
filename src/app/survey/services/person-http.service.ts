import { Observable } from 'rxjs';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Person } from '../models/person.model';
import { environment } from '../../../environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class PersonHttpService {
  constructor(private readonly http: HttpClient) {}

  save(person: Person): Observable<Person> {
    return this.http.post<Person>(`${environment.url.baseUrl}/persons`, person);
  }
}
