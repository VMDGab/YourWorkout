import React from 'react';
import { Container } from './styles';

import LottieView from 'lottie-react-native'
import TrainingAnimation from '../../assets/TrainingAnimation.json'
export function TrainingAnime() {
  return (
    <Container>
        <LottieView 
        source={TrainingAnimation}
         autoPlay 
         style={{height:120}} 
         resizeMode='contain' loop/>
    </Container>
  );
}