import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Workout } from '../models/workout';
import { Observable, catchError, throwError } from 'rxjs';
import { DatePipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class WorkoutService {

  private baseUrl = 'http://localhost:8083/';
  private url = this.baseUrl + 'tracker/workouts'

  constructor(
    private http: HttpClient,
    private datePipe: DatePipe
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

  create(workout: Workout): Observable<Workout> {
    workout.name = '';
    workout.day = '';
    return this.http.post<Workout>(this.url, workout).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError(
          () => new Error ('Todo Service.create: error creating Workout: ' + err)
        );
      })
    );
  }

  update(workout: Workout): Observable<Workout>{
    if(workout.day){
      workout.day = this.datePipe.transform(Date.now(), 'shortDate');
    } else {
      workout.day = '';
    }
  return this.http.put<Workout>(`${this.url}/${workout.id}`, workout).pipe(
    catchError((err: any) => {
      console.log(err);
      return throwError(
        () => new Error ('Workout Service.update: error updating Workout: ' + err)
      );
    })
  );
}

  destroy(workoutId: number){
    return this.http.delete<Workout>(`${this.url}/${workoutId}`).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError(
          () => new Error('WorkoutService.create(): error creating Workouts: ' + err)
        );
      })
    );

}

show(workoutId: number): Observable<Workout> {
  return this.http.get<Workout>(`${this.url}/${workoutId}`).pipe(
    catchError((err: any) => {
      console.log(err);
      return throwError(
        () => new Error('WorkoutService.index(): error retrieving Workout with ID: '+ workoutId + err)
      );
    })
  );
}
}

