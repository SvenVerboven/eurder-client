import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import { catchError} from 'rxjs/operators';
import {Item} from './item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private itemsUrl = 'https://order-sven-verboven.herokuapp.com/items';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  /** GET items from the server */
  getItems(): Observable<Item[]>{
    return this.http.get<Item[]>(this.itemsUrl)
      .pipe(catchError(this.handleError<Item[]>('getItems', [])));
  }

  /** POST: add a new item to the server */
  addItem(item: Item): Observable<Item> {
    return this.http.post<Item>(this.itemsUrl, item, this.httpOptions)
      .pipe(
        catchError(this.handleError<Item>('addItem'))
      );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
