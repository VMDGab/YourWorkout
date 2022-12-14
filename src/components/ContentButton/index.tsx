import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';

import {
    Button,
    IconContainer,
    Icon,
    Title,
 } from './styles';
interface Props extends RectButtonProps{
    title: string,
    icon: string,
}

export function ContentButton({title, icon} : Props) {
  return (
    <Button>
        <IconContainer>
            <Icon name={icon}/>
        </IconContainer>

        <Title>
            {title}
        </Title>
    </Button>
  );
}