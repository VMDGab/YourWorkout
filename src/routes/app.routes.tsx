import React from "react";

import { Dashboard } from "../pages/MainScreens/Dashboard";
import { Diets } from "../pages/MainScreens/Diets";
import { Workouts } from "../pages/MainScreens/Workouts";
import { BuildWorkout } from "../pages/UserInteractionScreens/BuildWorkout";
import { NewDiet } from "../pages/UserInteractionScreens/NewDiet";
import { ExercisesByWorkout } from "../pages/UserInteractionScreens/ExercisesByWorkout";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const {Screen, Navigator} = createNativeStackNavigator();


export default function AppRoutes() {

  return (

         <Navigator> 
          <Screen name="Dashboard" component={Dashboard} options={{headerShown: false}} />
          <Screen name="Diets" component={Diets} options={{headerShown: false}}/>
          <Screen name="Workouts" component={Workouts} options={{headerShown: false}}/>
          <Screen name="BuildWorkout" component={BuildWorkout} options={{headerShown: false}}/>
          <Screen name="NewDiet" component={NewDiet} options={{headerShown: false}}/>
          <Screen name="ExercisesByWorkout" component={ExercisesByWorkout} options={{headerShown: false}}/>
        </Navigator>

  )

}