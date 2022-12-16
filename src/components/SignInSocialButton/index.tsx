import React from 'react';
import { ButtonProps } from 'react-native';

import { SvgProps } from 'react-native-svg';
import { 
    Button,
    ImageContainer,
    
 } from './styles';

interface Props extends ButtonProps{
       svg: React.FC<SvgProps>
}

export function SignInSocialButton({ svg : Svg, ...rest}: Props ) {
  return (
    <Button {...rest}>
        <ImageContainer>
            <Svg />
        </ImageContainer>
  
    </Button>
  );
}