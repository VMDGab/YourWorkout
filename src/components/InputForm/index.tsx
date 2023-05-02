import React from 'react';

import { TextInputProps } from 'react-native';
import { Control, Controller } from 'react-hook-form';

import { 
    Container,
    Input,
    Error,
    Header,
    Icon,
    Title,
 } from './styles';

interface Props extends TextInputProps{

    Control: Control,
    name: string,
    error: string,
    icon: string,
    title:string,
}

export function InputForm({
    Control,
    name,
    error,
    icon,
    title,
    ...rest} : Props
) {
  return (
    <Container>
         <Controller
            control={Control}
            render={({  field: { onChange, value}  }) =>

            (
            <>
              <Header>
                <Icon name={icon}/>
                <Title>{title}</Title>
              </Header>

                <Input
                value={value}
                onChangeText={onChange}
                {...rest}
                />
                </>
            )}
        name={name}
         />
    {error && <Error>{error}</Error>}
         
    </Container>
  );
}