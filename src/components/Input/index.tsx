import React, { useState } from 'react';
import {
  Container,
  InputText,
   Icon,
  Title,
  Header,
} from './styles';
import { useTheme } from 'styled-components';
import { Octicons } from '@expo/vector-icons'
import { TextInputProps } from 'react-native';

interface Props extends TextInputProps {
  iconName: string,
  value?: string;
  title:string

}

export function Input({ iconName, value,title, ...rest }: Props) {

  const [isFocused, setIsFocused] = useState(false);


  function handleInputFocus() {
    setIsFocused(true)
  }

  function handleInputBlur() {
    setIsFocused(false)
    }

  return (
    <Container>
      <Header>
        <Icon name={iconName} />
        <Title>{title}</Title>
      </Header> 
      
      <InputText
        isFocused={isFocused}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        {...rest} />
    </Container>
  );
}