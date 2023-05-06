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
                   <Volume>
                    <Series>{series} Series</Series>
                    <Repetitions>{repetitions} Reps</Repetitions>
                </Volume>
                </WorkoutContainer>
            <Title>{title}</Title>
                
            </Info>
            <Icon name='pencil-outline' />

        </Container>
    );
}