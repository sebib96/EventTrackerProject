export class Workout {
  id: number;
  group: string;
  day: string | null;
  weight: number;
  reps: number;
  name: string;
  rpe: number;
  sets: number;


  constructor(
    id: number = 0,
    group: string = '',
    day: string = '',
    weight: number = 0,
    reps: number = 0,
    name: string = '',
    rpe: number = 0,
    sets: number = 0
  ){
    this.id = id;
    this.group = group,
    this.day = day;
    this.weight = weight,
    this.reps = reps,
    this.name = name,
    this.rpe = rpe,
    this.sets = sets;
  }
}


