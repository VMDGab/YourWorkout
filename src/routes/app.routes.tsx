import React from "react";

import { Dashboard } from "../pages/MainScreens/Dashboard";
import { Diets } from "../pages/MainScreens/Diets";
import { Workouts } from "../pages/MainScreens/Workouts";
import { BuildWorkout } from "../pages/WorkoutScreens/BuildWorkout";
import { NewDiet } from "../pages/DietScreens/NewDiet";
import { NewMeal } from "../pages/DietScreens/NewMeal";
import { ExercisesByWorkout } from "../pages/WorkoutScreens/ExercisesByWorkout";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const {Screen, Navigator} = createNativeStackNavigator();


export default function AppRoutes() {

  return (

         <Navigator> 
          <Screen name="Dashboard" component={Dashboard} options={{headerShown: false}} />
          <Screen name="Workouts" component={Workouts} options={{headerShown: false}}/>
          <Screen name="BuildWorkout" component={BuildWorkout} options={{headerShown: false}}/>
          <Screen name="ExercisesByWorkout" component={ExercisesByWorkout} options={{headerShown: false}}/>
          <Screen name="Diets" component={Diets} options={{headerShown: false}}/>
          <Screen name="NewDiet" component={NewDiet} options={{headerShown: false}}/>
          <Screen name="NewMeal" component={NewMeal} options={{headerShown: false}}/>
        </Navigator>

  )

}