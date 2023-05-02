import React, { useState } from 'react';
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
    Icon,
    Footer,
    TitleWorkoutInput,
} from './styles';
import { useNavigation } from '@react-navigation/native';



export function BuildWorkout() {
    const navigation = useNavigation()
    const [exercise, setExercise] = useState<string[]>([]);
    const [NewExercise, setNewExercise] = useState('');

    const [nameWorkout, setNameWorkouk] = useState('')


    function handleSetName() {
        setExercise([...exercise, NewExercise]);
        setNewExercise('')
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

            <InputWrapper>
                <Input
                    placeholder="Adicionar novo exercício..."
                    placeholderTextColor="#B2B2B2"
                    returnKeyType="send"
                    selectionColor="#666666"
                    onChangeText={text => setNewExercise(text)}
                    value={NewExercise}
                />
                <InputButton title='' onPress={handleSetName}><Icon name='plus'/></InputButton>
            </InputWrapper>

            <FlatList
                contentContainerStyle={{alignItems: 'center', justifyContent: 'center', marginTop: 30}}
                data={exercise}
                renderItem={({ item }) => <WorkoutCard title={item} />}
            />

            <Footer>
                <Button Title='Salvar' onPress={() => navigation.goBack()}/>
            </Footer>
        </Container>
    );
}