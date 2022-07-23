import { Observable } from 'rxjs';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { MessageService } from 'primeng/api';

import { Person } from '../models/person.model';
import { environment } from '../../../environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class PersonHttpService {
  constructor(private readonly http: HttpClient, private readonly messageService: MessageService) {}

  save(person: Person): Observable<Person> {
    return this.http.post<Person>(`${environment.url.baseUrl}/persons`, person);
  }
}
