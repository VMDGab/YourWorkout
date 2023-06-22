import React, { useState } from 'react';
import {
  Container,
  InputText,
   Icon,
  Title,
  Header,
  IconContainer,
  InputContainer
} from './styles';
import { useTheme } from 'styled-components';
import { Feather } from '@expo/vector-icons'
import { TextInputProps } from 'react-native';
import { TouchableOpacity } from 'react-native';


interface Props extends TextInputProps {
  iconName: string,
  value?: string;
  title:string

}

export function InputPassword({ iconName, value,title, ...rest }: Props) {

  const [isFocused, setIsFocused] = useState(false);


  function handleInputFocus() {
    setIsFocused(true)
  }

  function handleInputBlur() {
    setIsFocused(false)
   
  }

  const theme = useTheme()

  const [isPasswordVisible, setIsPasswordVisible] = useState(true)

  function HandleChangeVisibility() {
    setIsPasswordVisible(prevState => !prevState)
  }

  return (

    <Container>
      <Header>
        <Icon name={iconName} />
        <Title>{title}</Title>
      </Header> 
      <InputContainer>
      <InputText
        isFocused={isFocused}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        secureTextEntry={isPasswordVisible}
        {...rest}
        />


      <TouchableOpacity onPress={HandleChangeVisibility}>
        <IconContainer isFocused={isFocused}>
          <Feather
            name={isPasswordVisible ? 'eye' : 'eye-off'}
            size={24}
            color={theme.colors.Title}
          />
        </IconContainer>
      </TouchableOpacity>
      </InputContainer>
    </Container>
  );
}