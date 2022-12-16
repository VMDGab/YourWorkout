
import React from 'react';
import { ThemeProvider } from 'styled-components'
import { AppRoutes } from './src/routes/app.routes';
import { AuthRoutes } from './src/routes/auth.routes';
import { Initial } from './src/pages/AuthScreens/Initial';
import { useFonts, Prompt_600SemiBold, Prompt_500Medium, Prompt_700Bold } from '@expo-google-fonts/prompt';
import { BuildWorkout } from './src/pages/UserInteractionScreens/BuildWorkout';
//--------------------------------------------------

import Theme from './src/global/styles/Theme';
import AppLoading from 'expo-app-loading';
import { NavigationContainer } from '@react-navigation/native';


//---------------------------------------------------




export default function App() {


  const [FontsLoaded] = useFonts({

    Prompt_600SemiBold,
    Prompt_500Medium,
    Prompt_700Bold

  })

  if (!FontsLoaded) {
    return <AppLoading />
  }

  return (

    <ThemeProvider theme={Theme} >
      <NavigationContainer>
        <BuildWorkout/>
        </NavigationContainer>
    </ThemeProvider>

  );
}