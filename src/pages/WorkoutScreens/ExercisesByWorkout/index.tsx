import React, { useEffect, useState } from 'react';
import { BackButton } from '../../../components/BackButton';
import { WorkoutDTO } from '../../../dtos/workoutDTO';
import { ParamListBase, NavigationProp, useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';
import { FlatList } from 'react-native';
import { ExerciseCard } from '../../../components/ExerciseCard';
import {
    Container,
    Header,
    HeaderTitle,
    CountExercises,
    Count,
    Title,
} from './styles';

interface Params {
    workout: WorkoutDTO
}

interface ExerciseProps {
    idExercise: string,
    nameExercise: string,
    series: number,
    repetitions: number
}
export function ExercisesByWorkout() {
    const navigation = useNavigation<NavigationProp<ParamListBase>>();
    const route = useRoute();

    const { workout } = route.params as Params
    const [exercises, setExercises] = useState<ExerciseProps[]>([])

    function handleGoBack(){
        navigation.goBack()
    }
    useEffect(() => {
        setExercises(workout.exercises);
    }, [])
    return (
        <Container>
            <Header>
                <BackButton
                onPress={handleGoBack}
                    darkHeader={true} />
                <HeaderTitle>{workout.title}</HeaderTitle>
            </Header>

            <CountExercises>
                <Count>{exercises.length}</Count>
                <Title>exercícios totais</Title>
            </CountExercises>

            <FlatList
                contentContainerStyle={{ alignItems: 'center', justifyContent: 'center', paddingBottom: 20, }}
                data={exercises}
                renderItem={({ item }) =>
                    <ExerciseCard
                        title={item.nameExercise}
                        series={item.series}
                        repetitions={item.repetitions}

                    />}
            />
        </Container>
    );
}