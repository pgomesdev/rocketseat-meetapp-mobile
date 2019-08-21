import React from 'react';
import { TouchableOpacity } from 'react-native';

import Background from '../../components/Background';
import {
  Container,
  Form,
  TextInput,
  SubmitButton,
  Image,
  SubmitButtonText,
  LinkText,
} from './styles';

import logo from '../../assets/logo.png';

export default function SignIn() {
  return (
    <Background>
      <Container>
        <Image source={logo} />
        <Form>
          <TextInput
            placeholder="Digite seu e-mail"
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <TextInput
            placeholder="Digite sua senha"
            autoCapitalize="none"
            secureTextEntry
          />
          <SubmitButton>
            <SubmitButtonText>Entrar</SubmitButtonText>
          </SubmitButton>
        </Form>
        <TouchableOpacity>
          <LinkText>Criar conta grátis</LinkText>
        </TouchableOpacity>
      </Container>
    </Background>
  );
}
