import React from 'react';


import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Initial } from '../pages/AuthScreens/Initial';
import { SignIn } from '../pages/AuthScreens/SignIn';
import { SignUp } from '../pages/AuthScreens/SignUp';
const Stack = createNativeStackNavigator();

export function AuthRoutes() {
  return (
    <Stack.Navigator initialRouteName='Initial'>
      <Stack.Screen name='Initial' component={Initial} options={{ headerShown: false }} />
      <Stack.Screen name='SignIn' component={SignIn} options={{ headerShown: false }} />
      <Stack.Screen name='SignUp' component={SignUp} options={{ headerShown: false }} />

    </Stack.Navigator>

  );
}