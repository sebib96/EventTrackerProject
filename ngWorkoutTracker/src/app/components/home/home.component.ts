import { Component, OnInit } from '@angular/core';
import { Workout } from 'src/app/models/workout';
import { WorkoutService } from 'src/app/services/workout.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  workout: Workout[] = [];

  constructor(
    private workoutService: WorkoutService
  ){}

  ngOnInit(): void {
  this.reload();
  }

  // METHODS
  reload(){
    this.workoutService.index().subscribe({
      next: (data)=> {
        this.workout = data;
      },
      error: (err) => {
        console.log("Error displaying Workouts: " + err)
      }
    });
  }
}
