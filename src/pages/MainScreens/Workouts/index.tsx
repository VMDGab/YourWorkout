import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import { WorkoutCard } from '../../../components/WorkoutCard';
import TrainingSvg from '../../../assets/UserWorkoutsImage.svg';

import { api } from '../../../services/api';
import {
  Container,
  Header,
  CountWrapper,
  Count,
  HeaderTitle,
  Content,
} from './styles';
import { WorkoutDTO } from '../../../dtos/workoutDTO';



export function Workouts() {

const [workout, setWorkout] = useState<WorkoutDTO[]>([]);

useEffect(() => {
  async function fetchWorkouts() {
    try {
      const response = await api.get('/workout');
    setWorkout(response.data)

   
    }catch(error){
      console.log(error)
    }finally{

    }}


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
        <FlatList
          contentContainerStyle={
            {
              alignItems: 'center',
              justifyContent: 'center',
              paddingBottom: 20
            }
          }
          data={workout}
            renderItem={({ item }) =>
            <WorkoutCard
              title={item.title}
            />}
        />
      </Content>
    </Container>
  );
}