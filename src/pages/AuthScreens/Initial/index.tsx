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
} from './styles';


export function Initial() {
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
                <Button Title='Fazer Login' />

                <Separator>
                    <Line />

                    <Title>ou</Title>

                    <Line />

                </Separator>

                <SignUpButton>
                    <Title>Cadastrar-se</Title>
                </SignUpButton>
            </LoginOptions>

        </Container>
    );
}