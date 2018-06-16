import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Coworker } from './coworker';
import { MessageService } from './message.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })
export class CoworkerService {

  private coworkersUrl = 'api/coworkers';  // URL to web api

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  /** GET coworkers from the server */
  getCoworkers (): Observable<Coworker[]> {
    return this.http.get<Coworker[]>(this.coworkersUrl)
      .pipe(
        tap(coworkers => this.log(`fetched coworkers`)),
        catchError(this.handleError('getCoworkers', []))
      );
  }

  /** GET coworker by id. Return `undefined` when id not found */
  getCoworkerNo404<Data>(id: number): Observable<Coworker> {
    const url = `${this.coworkersUrl}/?id=${id}`;
    return this.http.get<Coworker[]>(url)
      .pipe(
        map(coworkers => coworkers[0]), // returns a {0|1} element array
        tap(h => {
          const outcome = h ? `fetched` : `did not find`;
          this.log(`${outcome} coworker id=${id}`);
        }),
        catchError(this.handleError<Coworker>(`getCoworker id=${id}`))
      );
  }

  /** GET coworker by id. Will 404 if id not found */
  getCoworker(id: number): Observable<Coworker> {
    const url = `${this.coworkersUrl}/${id}`;
    return this.http.get<Coworker>(url).pipe(
      tap(_ => this.log(`fetched coworker id=${id}`)),
      catchError(this.handleError<Coworker>(`getCoworker id=${id}`))
    );
  }

  /* GET coworkers whose name contains search term */
  searchCoworkers(term: string): Observable<Coworker[]> {
    if (!term.trim()) {
      // if not search term, return empty coworker array.
      return of([]);
    }
    return this.http.get<Coworker[]>(`${this.coworkersUrl}/?name=${term}`).pipe(
      tap(_ => this.log(`found coworkers matching "${term}"`)),
      catchError(this.handleError<Coworker[]>('searchCoworkers', []))
    );
  }

  //////// Save methods //////////

  /** POST: add a new coworker to the server */
  addCoworker (coworker: Coworker): Observable<Coworker> {
    return this.http.post<Coworker>(this.coworkersUrl, coworker, httpOptions).pipe(
      tap((coworker: Coworker) => this.log(`added coworker w/ id=${coworker.id}`)),
      catchError(this.handleError<Coworker>('addCoworker'))
    );
  }

  /** DELETE: delete the coworker from the server */
  deleteCoworker (coworker: Coworker | number): Observable<Coworker> {
    const id = typeof coworker === 'number' ? coworker : coworker.id;
    const url = `${this.coworkersUrl}/${id}`;

    return this.http.delete<Coworker>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted coworker id=${id}`)),
      catchError(this.handleError<Coworker>('deleteCoworker'))
    );
  }

  /** PUT: update the coworker on the server */
  updateCoworker (coworker: Coworker): Observable<any> {
    return this.http.put(this.coworkersUrl, coworker, httpOptions).pipe(
      tap(_ => this.log(`updated coworker id=${coworker.id}`)),
      catchError(this.handleError<any>('updateCoworker'))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a CoworkerService message with the MessageService */
  private log(message: string) {
    this.messageService.add('CoworkerService: ' + message);
  }
}
