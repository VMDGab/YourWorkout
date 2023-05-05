export interface WorkoutDTO {
  id: string,
  title: string,
  exercises: {
      idExercise: string,
      nameExercise: string,
      series: number,
      repetitions: number,
    }
  
}