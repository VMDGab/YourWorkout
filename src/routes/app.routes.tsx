import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons, Octicons, AntDesign } from '@expo/vector-icons'
import { Dashboard } from "../pages/MainScreens/Dashboard";
import { Resume } from "../pages/MainScreens/Resume";
import { Workouts } from "../pages/MainScreens/Workouts";
import { Platform } from 'react-native'
import Theme from "../global/styles/Theme";
const Tab = createBottomTabNavigator();

import { BuildWorkout } from "../pages/UserInteractionScreens/BuildWorkout";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const {Screen, Navigator} = createNativeStackNavigator();

function StackRoutes(){ 
  const theme = Theme
    return(
      <Tab.Navigator
      initialRouteName="Inicio"
      screenOptions={{

        tabBarActiveTintColor: theme.colors.Primary,
        tabBarInactiveTintColor: theme.colors.Title,
        tabBarLabelPosition: 'below-icon',
        headerShown: false,
        tabBarStyle: {
          paddingVertical: Platform.OS === 'ios' ? 20 : 13,
          height: 70,
          paddingBottom: 13,
          borderTopColor: theme.colors.Primary,
          borderTopWidth: 3,
          backgroundColor: theme.colors.BACKGROUND,
        },
        tabBarLabelStyle: {
          fontFamily: theme.Fonts.Medium
        }
      }}
    >
      <Tab.Screen
        options={{
          tabBarIcon: ({ size, color }) => (
            <AntDesign name={'home'} size={size} color={color} />
          )
        }}
        name={'Inicio'}
        component={Dashboard}
      />


      <Tab.Screen
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name={'arm-flex-outline'} size={size} color={color} />
          )
        }}
        name={'Seus Treinos'}
        component={Workouts}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons
              name={'chart-box-outline'}
              size={size}
              color={color}
            />
          )
        }}
        name={'Resumo'}
        component={Resume}
      />

    </Tab.Navigator>

    )
}

export default function AppRoutes() {

  return (

         <Navigator>
          <Screen name="StackRoutes" component={StackRoutes} options={{headerShown: false}}/>
          <Screen name="Dashboard" component={Dashboard} options={{headerShown: false}}/>
          <Screen name="BuildWorkout" component={BuildWorkout} options={{headerShown: false}}/>
        </Navigator>

  )

}