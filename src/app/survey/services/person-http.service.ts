import {Injectable} from '@angular/core';
import {Person} from '@angular/cli/utilities/package-json';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

const BASE_URL = 'http://localhost:8080';

@Injectable({
  providedIn: 'root'
})
export class PersonHttpService {

  constructor(private readonly http: HttpClient) {
  }

  save(person: Person): Observable<Person> {
    return this.http.post<Person>(`${BASE_URL}/persons`, person);
  }
}
