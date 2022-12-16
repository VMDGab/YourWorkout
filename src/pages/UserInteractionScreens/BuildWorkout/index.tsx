import React from 'react';

import { Control, Controller } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

import {
    Container,
    Title,
    WelcomeMessage,
    TextContainer,
    Input,
} from './styles';
import { SecondaryInput } from '../../../components/SecondaryInput';


const schema = Yup.object().shape({

    Login: Yup
        .string()
        .required('Informe o seu Email ou CPF'),

    NameWorkout: Yup
        .string()
        .required('Informe o nome do treino'),
})

export function BuildWorkout() {

    const {
        formState: { errors },
        handleSubmit,
        control,
        reset

    } = useForm({
        resolver: yupResolver(schema)
    })

    return (
        <Container>
            <TextContainer>
                <WelcomeMessage>Monte seu</WelcomeMessage>
                <Title>Novo Treino</Title>
            </TextContainer>

            <SecondaryInput
                name="NameWorkout"
                Control={control}
                placeholder='Nome do treino'
                autoCapitalize='sentences'
                autoCorrect={false}
                error={errors.NameWorkout && errors.NameWorkout.message}
            />

        </Container>
    );
}