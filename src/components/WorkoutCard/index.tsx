import React, { Fragment } from 'react';
import {
    Container,
    WorkoutContainer,
    Title,
    Icon,
} from './styles';

import HalterTabSvg from '../../assets/HalterTab.svg'

interface Props{
    title: string
}

export function WorkoutCard({title}: Props) {
    return (
        <Container>
            <WorkoutContainer>
                <HalterTabSvg/>
                <Title>{title}</Title>
            </WorkoutContainer>

            <Icon name='pencil-outline' />

        </Container>
    );
}