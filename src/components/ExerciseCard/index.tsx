import React, { Fragment } from 'react';
import {
    Container,
    WorkoutContainer,
    Title,
    Icon,
    Info,
    Repetitions,
    Series,
    Volume,
    SeparatorLine,
    CardIcons,
} from './styles';

import HalterTabSvg from '../../assets/HalterTab.svg'

interface Props {
    title: string,
    series?: number,
    repetitions?: number,
}

export function ExerciseCard({ title, series, repetitions }: Props) {
    return (
        <Container>
            <Info>
                <WorkoutContainer>
                    <HalterTabSvg />

                </WorkoutContainer>
                <Title>{title}</Title>
                <Volume>
                    <Series>{series} Series</Series>
                    <SeparatorLine />
                    <Repetitions>{repetitions} Repetições</Repetitions>
                </Volume>
            </Info>
            <CardIcons>
                <Icon name='trash' />
                <Icon name='pencil' />
            </CardIcons>
        </Container>
    );
}