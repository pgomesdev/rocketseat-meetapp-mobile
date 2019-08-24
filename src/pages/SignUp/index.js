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

export default function SignUp() {
  return (
    <Background>
      <Container>
        <Image source={logo} />
        <Form>
          <TextInput placeholder="Digite seu nome" autoCapitalize="words" />
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
            <SubmitButtonText>Criar conta</SubmitButtonText>
          </SubmitButton>
        </Form>
        <TouchableOpacity>
          <LinkText>Já tenho login</LinkText>
        </TouchableOpacity>
      </Container>
    </Background>
  );
}
