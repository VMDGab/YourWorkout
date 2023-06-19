import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import { WorkoutCard } from '../../../components/WorkoutCard';
import TrainingSvg from '../../../assets/UserWorkoutsImage.svg';
import { WorkoutDTO } from '../../../dtos/workoutDTO';
import { ContentButton } from '../../../components/ContentButton';
import { ParamListBase, NavigationProp, useNavigation } from '@react-navigation/native';
import { api } from '../../../services/api';
import { useTheme } from 'styled-components';
import { TabBar } from '../../../components/tabBar';

import {
  Container,
  Header,
  CountWrapper,
  Count,
  HeaderTitle,
  Content,
  Title,
  Footer,
} from './styles';


export function Workouts() {
  const navigation = useNavigation<NavigationProp<ParamListBase>>();
  const theme = useTheme()
  const [workout, setWorkout] = useState<WorkoutDTO[]>([]);



  useEffect(() => {
    async function fetchWorkouts() {
      try {
        const response = await api.get('/workout');
        setWorkout(response.data)


      } catch (error) {
        console.log(error)
      } finally {

      }
    }


    fetchWorkouts()
  }, [])

  return (
    <Container>
      <Header>
        <CountWrapper>
          <Count>{workout.length}</Count>
          <HeaderTitle>Treinos Totais</HeaderTitle>
        </CountWrapper>
        <TrainingSvg />
      </Header>

      <Content>
        <Title>Seus Treinos</Title>
        <FlatList
          contentContainerStyle={
            {
              alignItems: 'center',
              justifyContent: 'center',
              paddingBottom: 20,
              backgroundColor: theme.colors.BACKGROUND,
            }
          }
          data={workout}
          renderItem={({ item }) =>
            <WorkoutCard
              title={item.title}
              onPress={()=> navigation.navigate('ExercisesByWorkout', {
                workout: {
                  id: item.id,
                  title: item.title,
                  exercises: item.exercises,
                }
          
              })}
            />
          
          }
        />
      </Content>

      <Footer>
        <ContentButton
          icon='plus'
          title='Montar novo treino'
          onPress={() => navigation.navigate('BuildWorkout')}
        />
      </Footer>
      <TabBar />
    </Container>
  );
}