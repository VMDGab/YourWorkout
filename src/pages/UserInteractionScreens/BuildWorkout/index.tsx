import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native-gesture-handler';
import { WorkoutCard } from '../../../components/WorkoutCard';
import { Button } from '../../../components/Button';
import {
    Container,
    Title,
    WelcomeMessage,
    TextContainer,
    InputButton,
    Input,
    InputWrapper,
    Footer,
    TitleWorkoutInput,
    MiniInput,
    FormWrapper,
    MiniInputWrapper,
    ButtonText,
} from './styles';
import { useNavigation } from '@react-navigation/native';
import { WorkoutDTO } from '../../../dtos/workoutDTO';
import uuid from 'react-native-uuid';
import { api } from '../../../services/api';


interface Props {
    idExercise: string,
    nameExercise: string,
    series: number,
    repetitions: number,
}



export function BuildWorkout() {
    const navigation = useNavigation()

    const [exercise, setExercise] = useState<Props[]>([]);
    const [workout, setWorkout] = useState<WorkoutDTO[]>()

    const [nameExercise, setNameExercise] = useState('');
    const [series, setSeries] = useState(Number);
    const [repetitions, setRepetitions] = useState(Number);
    const [nameWorkout, setNameWorkouk] = useState('')

    

    function handleSetExercise() {

        const newExercise = {
            idExercise: String(uuid.v4()),
            nameExercise: nameExercise,
            series: series,
            repetitions: repetitions,
        }
        setExercise([...exercise, newExercise]);
        setNameExercise('');
        setSeries('');
        setRepetitions('');

    }

    async function handleSetWorkout() {
        const Workout = {
            id: String(uuid.v4()),
            title: nameWorkout,
            exercises: {exercise}
        }

        setWorkout(Workout)
      
            if (!workout) {
                return
            }
            else {
                await api.post('/workout', {
                    workout
                })
            }
            navigation.navigate('Dashboard')
    
        }

          return (
        <Container>
            <TextContainer>
                <WelcomeMessage>Monte seu</WelcomeMessage>
                <Title>Novo Treino</Title>
            </TextContainer>

            <TitleWorkoutInput
                placeholder="Nome do treino"
                placeholderTextColor="#B2B2B2"
                returnKeyType="send"
                selectionColor="#666666"
                onChangeText={text => setNameWorkouk(text)}
                value={nameWorkout}
            />

            <FormWrapper>

                <Input
                    placeholder="Nome do exercício"
                    placeholderTextColor="#B2B2B2"
                    returnKeyType="send"
                    selectionColor="#666666"
                    onChangeText={text => setNameExercise(text)}
                    value={nameExercise}
                />

                <InputWrapper>

                    <MiniInputWrapper>

                        <MiniInput
                            placeholder="Series"
                            placeholderTextColor="#B2B2B2"
                            returnKeyType="send"
                            selectionColor="#666666"
                            onChangeText={text => setSeries(text)}
                            value={series} />

                        <MiniInput
                            placeholder="Repetições"
                            placeholderTextColor="#B2B2B2"
                            returnKeyType="send"
                            selectionColor="#666666"
                            onChangeText={text => setRepetitions(text)}
                            value={repetitions} />

                    </MiniInputWrapper>

                    <InputButton onPress={handleSetExercise}>
                        <ButtonText>Salvar Exercício</ButtonText>
                    </InputButton>

                </InputWrapper>

            </FormWrapper>

            <FlatList
                contentContainerStyle={{ alignItems: 'center', justifyContent: 'center', paddingBottom: 20 }}
                data={exercise}
                renderItem={({ item }) =>
                    <WorkoutCard
                        title={item.nameExercise}
                        series={item.series}
                        repetitions={item.repetitions}

                    />}
            />

            <Footer>
                <Button Title='Salvar' onPress={handleSetWorkout} />
            </Footer>
        </Container>
    );
}