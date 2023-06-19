import React, {useState} from 'react';
import { Container, NavigationButton, Icon, Title } from './styles';
import { useTheme } from 'styled-components';
import { useNavigation } from '@react-navigation/native';

export function TabBar() {
    const navigation = useNavigation()
    const theme = useTheme()

    function handleOpenHome(){
        navigation.navigate('Dashboard');
    }

    function handleOpenWorkout(){
        navigation.navigate('Workouts');
     }

    function handleOpenDiet(){
        navigation.navigate('Resume');
     }

  return (
    <Container>
        <NavigationButton onPress={handleOpenHome}>
            <Icon name='home-outline' color={theme.colors.Primary}/>
            <Title>Home</Title>
        </NavigationButton>

        <NavigationButton onPress={handleOpenWorkout}>
            <Icon name='arm-flex-outline' color={theme.colors.Primary}/>
            <Title>Treinos</Title>
        </NavigationButton>

        <NavigationButton onPress={handleOpenDiet}>
            <Icon name='food-apple-outline' color={theme.colors.Primary}/>
            <Title>Dietas</Title>
        </NavigationButton>
    </Container>
  );
}