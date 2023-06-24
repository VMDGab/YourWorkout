import React from 'react';

import LogoSvg from '../../../assets/Logo.svg'
import InitalSvg from '../../../assets/InitialPageImage.svg'
import { Button } from '../../../components/Button';
import {
    Container,
    Svgs,
    MainText,
    LoginOptions,
    Separator,
    Line,
    SignUpButton,
    Title,
    ButtonTitle,
} from './styles';

import { useNavigation } from '@react-navigation/native';

export function Initial() {

const navigation = useNavigation();

    return (
        <Container>
                        <Svgs>
                <LogoSvg />
                <InitalSvg />
            </Svgs>

            <MainText>
                Tenha controle de seus treinos{'\n'}
                e de sua dieta de forma{'\n'}
                simples e organizada
            </MainText>

            <LoginOptions>
                <Button Title='Fazer Login' onPress={() => navigation.navigate('SignIn')}/>

                <Separator>
                    <Line />

                    <Title>ou</Title>

                    <Line />

                </Separator>

                <SignUpButton onPress={() => navigation.navigate('SignUp')}>
                    <ButtonTitle>Cadastrar-se</ButtonTitle>
                </SignUpButton>
            </LoginOptions>

        </Container>
    );
}