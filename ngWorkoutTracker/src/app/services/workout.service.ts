import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Workout } from '../models/workout';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WorkoutService {

  private baseUrl = 'http://localhost:8083/';
  private url = this.baseUrl + 'tracker/workouts'

  constructor(
    private http: HttpClient
  ) { }

  index(): Observable<Workout[]> {
    return this.http.get<Workout[]>(this.url,).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError(
          () => new Error('TodoService.index(): error retrieving Workouts: ' + err)
        );
      })
    );
  }
}
