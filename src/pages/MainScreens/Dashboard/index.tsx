import React, { useEffect, useState } from 'react';

import LogoSvg from '../../../assets/Logo.svg'
import HalterTabSvg from '../../../assets/HalterTab.svg'
import { ContentButton } from '../../../components/ContentButton';


import {
  Container,
  Header,
  HeaderWrapper,
  GrettingsMessage,
  UserName,
  TextWrapper,
  UserPhoto,
  Options,
  TodayWorkout,
  Title,
  WorkoutButton,
  WorkoutTitle,
  WorkoutButtonWrapper,
} from './styles';
import { useNavigation } from '@react-navigation/native';
import { TrainingAnime } from '../../../components/TrainingAnime';

export function Dashboard() {

  const navigation = useNavigation()
  const [grettings, setGrettings] = useState('');

  useEffect(() => {

    const CurrentHour = new Date().getHours();

    if (CurrentHour >= 6 && CurrentHour < 12) {
      setGrettings('Bom Dia');
    }
    else if (CurrentHour >= 12 && CurrentHour < 18) {
      setGrettings('Boa Tarde');
    }

    else {
      setGrettings('Boa Noite')
    }


  }, [])


  return (
    <Container>
      <Header>

        <HeaderWrapper>

          <UserPhoto source={{ uri: 'https://avatars.githubusercontent.com/u/108305352?v=4' }} />

          <TextWrapper>
            <GrettingsMessage>
              {grettings}
            </GrettingsMessage>

            <UserName>
              Gabriel
            </UserName>
          </TextWrapper>

        </HeaderWrapper>


        <Title>
          Treino de Hoje
        </Title>

        <WorkoutButton>
          <WorkoutButtonWrapper>
            <TrainingAnime />
            <TodayWorkout>
            <HalterTabSvg />
            <WorkoutTitle>Costa, Bíceps{'\n'}e antebraço</WorkoutTitle>
            
          </TodayWorkout>
          </WorkoutButtonWrapper>
        </WorkoutButton>

      </Header>




      <Options>
        <ContentButton title='Monte seu Treino' icon='arm-flex-outline' onPress={() => navigation.navigate('BuildWorkout')} />
        <ContentButton title='Monte sua Dieta' icon='playlist-edit' />
        <ContentButton title='Calcule seus Macros' icon='calculator-variant-outline' />
      </Options>

    </Container>
  );
}