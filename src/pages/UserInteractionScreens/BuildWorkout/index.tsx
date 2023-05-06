import React, { useState } from 'react';
import { FlatList } from 'react-native-gesture-handler';
import { ExerciseCard } from '../../../components/ExerciseCard';
import { Button } from '../../../components/Button';
import { useNavigation } from '@react-navigation/native';
import uuid from 'react-native-uuid';
import { api } from '../../../services/api';

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


interface Props {
    idExercise: string,
    nameExercise: string,
    series: number,
    repetitions: number,
}



export function BuildWorkout() {
    const navigation = useNavigation()

    const [exercise, setExercise] = useState<Props[]>([]);
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

        await api.post('/workout', {
                id: String(uuid.v4()),
                title: nameWorkout,
                exercises: exercise
            
        })
        setExercise([]);
        setNameWorkouk('')
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
                    <ExerciseCard
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