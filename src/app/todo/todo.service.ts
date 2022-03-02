import { Injectable } from '@angular/core';
import { toDo } from './todo';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, tap, map, throwError } from 'rxjs';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private completedUrl = 'api/todo/todo-complete.json';
  private incompletedUrl = 'api/todo/todo-incomplete.json';
  private todoUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {}
  
  getTodoList(): Observable<toDo[]> {
    return this.http.get<toDo[]>(this.todoUrl + '/todos');
  }

  getTodo(id: string): Observable<toDo> {
    if(id === '0'){
      return of(this.initializeToDo());
    }
    const url = `${this.todoUrl}/${String(id)}`;
    return this.http.get<toDo>(url)
      .pipe(
        tap(data => console.log('getProduct: ' + JSON.stringify(data))),
        catchError(this.handleError)
      )
  }

  private initializeToDo(){
    return {
      id: 0,
      title: "",
      description: "",
      priority: "low",
      completed: false
    }
  }

  updateTodo(todo: toDo): Observable<toDo> {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    const url = `${this.todoUrl}/${todo.id}`;
    return this.http.put<toDo>(url, todo, {headers: headers})
      .pipe(
        tap(() => console.log('updateTodo: ' + todo.id)),
        map(() => todo),
        catchError(this.handleError)
      )
  }

  createTodo(todo: toDo): Observable<toDo> {
    //const headers = new HttpHeaders({'Content-Type': 'application/json'});
    todo.id = null;
    return this.http.post<toDo>(this.todoUrl, todo)
      .pipe(
        tap(() => console.log('updateTodo: ' + todo.id)),
        map(() => todo),
        catchError(this.handleError)
      )
  }

  private handleError(err: { error: { message: any; }; status: any; body: { error: any; }; }): Observable<never> {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
    }
    console.error(err);
    return throwError(errorMessage);
  }
}
