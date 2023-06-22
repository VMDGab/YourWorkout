import React, { useState } from 'react';

import SignInImageSvg from '../../../assets/SignInImage.svg'
import Google from '../../../assets/google.svg'
import apple from '../../../assets/apple.svg'
import { InputForm } from '../../../components/InputForm';
import * as Yup from 'yup';
import { useNavigation } from '@react-navigation/native';
import { Alert, Platform } from 'react-native';
import { TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView } from 'react-native';
import { useAuth } from '../../../hooks/auth'

import { Input } from '../../../components/Input';
import { InputPassword } from '../../../components/InputPassword';
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



export function SignIn() {

  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { signIn } = useAuth();
  async function handleSignIn() {
    try {
      const schema = Yup.object().shape({

        Email: Yup
          .string()
          .required('Informe o seu Email ou CPF'),

        Password: Yup
          .string()
          .required('Informe o sua senha'),
      })

      await schema.validate({ email, password })
      signIn({ email, password })
    } catch(error){
      if(error instanceof Yup.ValidationError){
       Alert.alert('Opa', error.message)
      }else{
        Alert.alert(
          'Erro na autenticação',
          'Ocorreu um erro ao fazer login, verifique suas credenciais'
        )
      }
    }
  }



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
        <Input
              iconName='mail'
              placeholder='E-mail'
              keyboardType='email-address'
              autoCorrect={false}
              autoCapitalize='none'
              title='Email'
              onChangeText={setEmail}
              value={email}
            />
            <InputPassword
              iconName='lock'
              placeholder='Senha'
              onChangeText={setPassword}
              value={password} 
              title='Senha'
              />
        </InputContainer>

        <Button Title='Entrar' />

        {/* {/* <SocialLoginOptions>
        <MainText>Ou faça login com</MainText>
        <SignInSocialButton title='' svg={Google}/>
        {Platform.OS === 'ios' && <SignInSocialButton title='' svg={apple} />} 
      </SocialLoginOptions> */}
      </Container>
    </TouchableWithoutFeedback>
  );
}