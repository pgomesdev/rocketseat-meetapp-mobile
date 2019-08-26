import React from 'react';

import Background from '../../components/Background';
import {
  Container,
  Form,
  TextInput,
  SubmitButton,
  SubmitButtonText,
  LogoutButton,
  Bar,
} from './styles';

export default function SignIn() {
  return (
    <Background>
      <Container>
        <Form>
          <TextInput placeholder="Digite seu nome" autoCapitalize="words" />
          <TextInput placeholder="Digite seu usuário" autoCapitalize="none" />
          <TextInput
            placeholder="Digite seu e-mail"
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <Bar />
          <TextInput
            placeholder="Digite a senha atual"
            autoCapitalize="none"
            secureTextEntry
          />
          <TextInput
            placeholder="Digite a nova senha"
            autoCapitalize="none"
            secureTextEntry
          />
          <TextInput
            placeholder="Confirme a nova senha"
            autoCapitalize="none"
            secureTextEntry
          />
          <SubmitButton>
            <SubmitButtonText>Salvar perfil</SubmitButtonText>
          </SubmitButton>
          <LogoutButton>
            <SubmitButtonText>Sair do Meetapp</SubmitButtonText>
          </LogoutButton>
        </Form>
      </Container>
    </Background>
  );
}
