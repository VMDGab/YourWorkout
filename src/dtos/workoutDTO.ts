export interface WorkoutDTO {
  id: string,
  title: string,
  exercise: [
    idExercise: string,
    nameExercise: string,
    series: number,
    repetitions: number
  ]

  
}