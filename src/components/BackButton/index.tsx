import React from 'react';
import { Container } from './styles';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from 'styled-components';
import { RectButtonProps } from 'react-native-gesture-handler';


interface props extends RectButtonProps {
    darkHeader: boolean;
    onPress: () => void;
}

export function BackButton({darkHeader, onPress} : props) {

    const theme = useTheme()
  return (
    <Container onPress={onPress}>
        <Ionicons 
        name='ios-chevron-back'
        size={30}
        color={darkHeader ? theme.colors.Shape : theme.colors.Primary} />
    </Container>
  );
}