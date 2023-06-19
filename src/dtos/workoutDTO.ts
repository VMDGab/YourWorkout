export interface WorkoutDTO {
  [x: string]: never;
  id: string,
  title: string,
  exercises: {
    idExercise: string,
    nameExercise: string,
    series: number,
    repetitions: number
  }[],

  
}