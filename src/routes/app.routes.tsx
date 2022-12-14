import React from "react";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons , Octicons , AntDesign  } from '@expo/vector-icons'
import { Dashboard } from "../pages/Dashboard";
import { Profile } from "../pages/Profile";
import { Workouts} from "../pages/Workouts";
import { Platform } from 'react-native'
import Theme from "../global/styles/Theme";
const Tab = createBottomTabNavigator();

export function Routes(){

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
              paddingBottom:13,
              borderTopColor: theme.colors.Primary,
              borderTopWidth:3,
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
            <Octicons 
              name={'person'}
              size={size}
              color={color}
            />
          )
        }}
        name={'Perfil'}
        component={Profile}
      />

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
            <MaterialCommunityIcons  name={'arm-flex-outline'} size={size} color={color} />
          )
        }}
        name={'Seus Treinos'}
        component={Workouts}
      />

        </Tab.Navigator>


    )

}