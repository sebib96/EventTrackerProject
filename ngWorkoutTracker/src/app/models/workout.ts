export class Workout {
  id: number;
  name: string;
  day: string;

  constructor(
    id: number = 0,
    name: string = '',
    day: string = ''
  ){
    this.id = id;
    this.name = name;
    this.day = day;
  }
}


