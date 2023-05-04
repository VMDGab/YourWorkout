import React, { useEffect, useState } from 'react';


import HalterTabSvg from '../../../assets/HalterTab.svg'


import { useNavigation } from '@react-navigation/native';
import { TrainingAnime } from '../../../components/TrainingAnime';

import { NewCard } from '../../../components/NewCard';
import {
  Container,
  Header,
  HeaderWrapper,
  GrettingsMessage,
  UserName,
  TextWrapper,
  UserPhoto,
  TodayWorkout,
  Title,
  WorkoutButton,
  WorkoutTitle,
  WorkoutButtonWrapper,
  InfoWorkout,
  Content,
  Cards,
  Menu,
  MenuIcon,
} from './styles';
import { ContentButton } from '../../../components/ContentButton';


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
        <Menu>
          <MenuIcon name= 'menu'/>
        </Menu>
      </Header>
<Content>
        <Title>
          Treino de Hoje
        </Title>
<TodayWorkout>
        

        <WorkoutButton>
          <WorkoutButtonWrapper>
            <TrainingAnime />
            
            <InfoWorkout>
            <HalterTabSvg />
            <WorkoutTitle>Costa, Bíceps{'\n'}e antebraço</WorkoutTitle>
            </InfoWorkout>
         
          </WorkoutButtonWrapper>
        </WorkoutButton>
        <ContentButton icon='arm-flex-outline' title='Iniciar outro treino' style={{alignSelf: 'center', marginTop:20}}/>

 </TodayWorkout>
    <Title>Afim de inovar?</Title>
   <Cards>
   <NewCard type='Workout' onPress={() => navigation.navigate('BuildWorkout')}/>
   <NewCard type='Diet'/>
  </Cards>
</Content>
    </Container>
  );
}