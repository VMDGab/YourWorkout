import React from 'react';

import SignInImageSvg from '../../../assets/SignInImage.svg'
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
  SignUpContainer,
  Title,
  Icon,
  SignUpButton,
  WelcomeMessage,
  TextContainer,
  InputContainer,
  SocialLoginOptions,
  MainText,
} from './styles';
import { Button } from '../../../components/Button';
import { SignInSocialButton } from '../../../components/SignInSocialButton';

const schema = Yup.object().shape({

  Login: Yup
    .string()
    .required('Informe o seu Email ou CPF'),

  Password: Yup
    .string()
    .required('Informe o sua senha'),
})

export function SignIn() {

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
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <Container>

      <SignUpContainer>
        <SignUpButton onPress={() => navigation.navigate('SignUp')}>
          <Title>Cadastrar-se</Title>
          <Icon name="keyboard-arrow-right" />
        </SignUpButton>
      </SignUpContainer>
    
      <Svgs>
        <SignInImageSvg />
      </Svgs>

      <TextContainer>
        <WelcomeMessage>Bem vindo de volta</WelcomeMessage>
        <Title>Faça seu Login!</Title>
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
        name="Password"
        Control={control}
        placeholder='Senha'
        autoCapitalize='sentences'
        autoCorrect={false}
        error={errors.Password && errors.Password.message}
        icon='lock'
        title='Senha'
      />
      </InputContainer>

      <Button Title='Entrar'/>

      <SocialLoginOptions>
        <MainText>Ou faça login com</MainText>
        <SignInSocialButton title='' svg={Google}/>
        <SignInSocialButton title='' svg={apple}/>
      </SocialLoginOptions>
    </Container>
    </TouchableWithoutFeedback>
  );
}