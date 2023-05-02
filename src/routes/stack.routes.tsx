import React from "react";


import { Dashboard } from "../pages/MainScreens/Dashboard";
import { Resume } from "../pages/MainScreens/Resume";
import { Workouts } from "../pages/MainScreens/Workouts";
import { BuildWorkout } from "../pages/UserInteractionScreens/BuildWorkout";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const {Screen, Navigator} = createNativeStackNavigator();

export function StackRoutes(){
    return(
        <Navigator>
           <Screen name="BuildWorkout" component={BuildWorkout} options={{headerShown: false}}/>
        </Navigator>
    )
}