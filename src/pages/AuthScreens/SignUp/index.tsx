import React from 'react';

import SignUpImageSvg from '../../../assets/SignUpImage.svg'
import Google from '../../../assets/google.svg'
import apple from '../../../assets/apple.svg'
import { InputForm } from '../../../components/InputForm';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useNavigation } from '@react-navigation/native';
import { Alert } from 'react-native';
import { TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView } from 'react-native';

import {
  Container,
  Svgs,
  SignInContainer,
  Title,
  Icon,
  SignInButton,
  WelcomeMessage,
  TextContainer,
  InputContainer,

} from './styles';
import { Button } from '../../../components/Button';


const schema = Yup.object().shape({

  Login: Yup
    .string()
    .required('Informe o seu Email ou CPF'),

  Email: Yup
    .string()
    .required('Informe o seu Email'),

  Password: Yup
    .string()
    .required('Informe o sua senha'),

  ConfPassword: Yup
    .string()
    .required('Confirme sua senha'),
})

export function SignUp() {

  const navigation = useNavigation();

  const {
    formState: { errors },
    handleSubmit,
    control,
    reset

  } = useForm({
    resolver: yupResolver(schema)
  })

  return (
    <Container>

      <SignInContainer>
        <SignInButton onPress={() => navigation.navigate('SignIn')}>
          <Title>Fazer login</Title>
          <Icon name="keyboard-arrow-right" />
        </SignInButton>
      </SignInContainer>

      <Svgs>
        <SignUpImageSvg />
      </Svgs>

      <TextContainer>
        <WelcomeMessage>Novo por aqui?</WelcomeMessage>
        <Title>Crie sua conta!</Title>
      </TextContainer>

      <InputContainer>
        <InputForm
          name="Login"
          Control={control}
          placeholder='Email'
          autoCapitalize='sentences'
          autoCorrect={false}
          keyboardType='email-address'
          error={errors.Login && errors.Login.message}
          icon='person'
          title='E-mail'
        />

        <InputForm
          name="Email"
          Control={control}
          placeholder='E-mail'
          autoCapitalize='sentences'
          autoCorrect={false}
          error={errors.Password && errors.Password.message}
          icon='mail'
          title='E-mail'
        />

        <InputForm
          name="Password"
          Control={control}
          placeholder='Senha'
          autoCapitalize='sentences'
          autoCorrect={false}
          error={errors.Password && errors.Password.message}
          icon='lock'
          title='Senha'
        />
         <InputForm
          name="ConfPassword"
          Control={control}
          placeholder='Confirmar Senha'
          autoCapitalize='sentences'
          autoCorrect={false}
          error={errors.Password && errors.Password.message}
          icon='lock'
          title='Confirmar Senha'
        />
      </InputContainer>

      <Button Title='Cadastrar' />

    </Container>
  );
}