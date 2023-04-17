import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { Workout } from 'src/app/models/workout';
import { WorkoutService } from 'src/app/services/workout.service';

@Component({
  selector: 'app-workouts',
  templateUrl: './workouts.component.html',
  styleUrls: ['./workouts.component.css']
})
export class WorkoutsComponent {

  workout: Workout[] = [];
  selected: Workout | null = null;
  newWorkout: Workout = new Workout();
  editWorkout: Workout | null = null;
  showWorkout: boolean = false;
  avgRpe: number = 0;

  constructor(
    private workoutService: WorkoutService,
    private datePipe: DatePipe
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

  updateWorkout(workout: Workout, goToDetail = true){
    console.log(workout);
    this.workoutService.update(workout).subscribe({
      next: (updatedWorkout) => {
       this.editWorkout = null;
       if(goToDetail){
         this.selected = updatedWorkout;
       }
       this.reload();
      },
      error: (err) =>{
        console.error('Error updating Workout' + err);
      }
    });
  }

  addWorkout(workout: Workout){
    this.workoutService.create(workout).subscribe({
      next: (newWorkout) => {
        this.newWorkout = new Workout();
        this.reload();
      },
      error: (err) => {
        console.log('Error creating Workout' + err);
      }
    });

    this.newWorkout = new Workout();
  }

  displayWorkout(workout: Workout){
    this.selected = workout;
  }

  displayTable(): void{
    this.selected = null;
  }

  setEditWorkout(){
    this.editWorkout = Object.assign({}, this.selected);
  }

  deleteWorkout(workoutId: number){
    this.workoutService.destroy(workoutId).subscribe({
      next: () => {
        this.reload();
      },

      error: (err) => {
        console.error('Error deleting Workout' + err);
      }
    });
  }

  averageRpe(): number{
    let total: number = 0;
    for (let wo of this.workout){
      total += wo.rpe;
    }
   return this.avgRpe = total/this.workout.length;
  }

}
