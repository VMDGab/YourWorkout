import React from 'react';
import { Container, Icon, Title, TypeCard } from './styles';
import TrainingSvg from '../../assets/Training.svg';
import DietSvg from '../../assets/Diet.svg';
import { TouchableOpacityProps } from 'react-native';
interface props extends TouchableOpacityProps{
    type: 'Diet' | 'Workout',
}

export function NewCard({ type, ...rest }: props) {
    return (
        <Container {...rest}>
                <Icon>{type === 'Diet' ? <DietSvg /> : type === 'Workout' ? <TrainingSvg /> : ''}</Icon>
                <Title>{type === 'Diet' ? 'Monte sua' : type === 'Workout' ? 'Monte seu' : ''}</Title>
                <TypeCard>{type === 'Diet' ? 'Nova dieta' : type === 'Workout' ? 'Novo treino' : ''}</TypeCard>
            
        </Container>
    );
}