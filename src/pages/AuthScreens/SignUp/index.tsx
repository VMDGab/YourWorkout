import React, { useState } from 'react';

import SignUpImageSvg from '../../../assets/SignUpImage.svg'
import Google from '../../../assets/google.svg'
import apple from '../../../assets/apple.svg'
import { Input } from '../../../components/Input';
import { InputPassword } from '../../../components/InputPassword';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useNavigation } from '@react-navigation/native';
import { Alert } from 'react-native';
import { TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView } from 'react-native';

import {
  Container,
  SignInContainer,
  Title,
  Icon,
  SignInButton,
  WelcomeMessage,
  TextContainer,
  InputContainer,

} from './styles';
import { Button } from '../../../components/Button';

export function SignUp() {

  async function handleSignUp() {
    try {

      const schema = Yup.object().shape({

        name: Yup
          .string()
          .required('Informe o seu Email ou CPF'),

        email: Yup
          .string()
          .required('Informe o seu Email'),

        password: Yup
          .string()
          .required('Informe o sua senha'),

        confPassword: Yup
          .string()
          .required('Confirme sua senha'),
      })

      await schema.validate({name,email,password, confPassword })
      if(password === confPassword){

        // Cadastrar usuario no banco
      }
     
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        Alert.alert('Opa', error.message)
      } else {
        Alert.alert(
          'Erro na autenticação',
          'Ocorreu um erro ao fazer login, verifique suas credenciais'
        )
      }
    }
  }


  const navigation = useNavigation();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confPassword, setConfPassword] = useState('');
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>

        <SignInContainer>
          <SignInButton onPress={() => navigation.navigate('SignIn')}>
            <Title>Fazer login</Title>
            <Icon name="keyboard-arrow-right" />
          </SignInButton>
        </SignInContainer>

        <KeyboardAvoidingView behavior="position" enabled>
          <TextContainer>
            <WelcomeMessage>Novo por aqui?</WelcomeMessage>
            <Title>Crie sua conta!</Title>
          </TextContainer>


          <InputContainer>
            <Input
              iconName='person'
              placeholder='Nome'
              autoCorrect={false}
              autoCapitalize='none'
              title='Nome'
              onChangeText={setName}
              value={name}
            />
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
            <InputPassword
              iconName='lock'
              placeholder='Repita sua senha'
              onChangeText={setConfPassword}
              value={confPassword}
              title='Confirmar Senha'
            />
          </InputContainer>
        </KeyboardAvoidingView>
        <Button Title='Cadastrar' onPress={handleSignUp}/>

      </Container>
    </TouchableWithoutFeedback>
  );
}