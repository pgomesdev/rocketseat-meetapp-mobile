import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { FlatList } from 'react-native';

import Meetup from '../../components/Meetup';

import Background from '../../components/Background';
import { Container, DateContainer, DateText } from './styles';

const meetups = [
  {
    id: 15,
    name: 'Meetup Admiradores do Bob Esponja',
    description:
      'Meetup para reunir todos os admiradores do Bob Esponja no mundo',
    location: 'São Paulo, SP',
    date: '2019-10-05T17:00:00.000Z',
    user: {
      fullname: 'Thécila Kamylla Monteiro Silva',
      username: 'tkmonteiro',
      email: 'thecila.monteiro@gmail.com',
    },
    banner: {
      url:
        'http://192.168.0.13:3001/files/440ce9ebc3d31fc664f810cff53d371c.jpg',
      name: 'sad_bob_esponja.jpg',
      path: '440ce9ebc3d31fc664f810cff53d371c.jpg',
    },
  },
  {
    id: 14,
    name: 'Meetup Admiradores do Bob Esponja ATUALIZADO',
    description:
      'Meetup para reunir todos os admiradores do Bob Esponja no mundo',
    location: 'São Paulo, SP',
    date: '2019-10-05T17:00:00.000Z',
    user: {
      fullname: 'Pedro Ivo Gomes Silva',
      username: 'pgomesdev',
      email: 'pgomesdev@gmail.com',
    },
    banner: {
      url:
        'http://192.168.0.13:3001/files/440ce9ebc3d31fc664f810cff53d371c.jpg',
      name: 'sad_bob_esponja.jpg',
      path: '440ce9ebc3d31fc664f810cff53d371c.jpg',
    },
  },
];

export default function Dashboard() {
  return (
    <Background>
      <Container>
        <DateContainer>
          <Icon name="chevron-left" size={30} color="#fff" />
          <DateText>31 de Maio</DateText>
          <Icon name="keyboard-arrow-right" size={30} color="#fff" />
        </DateContainer>
        <FlatList
          keyExtractor={meetup => String(meetup.id)}
          data={meetups}
          renderItem={({ item: meetup }) => <Meetup meetup={meetup} />}
        />
      </Container>
    </Background>
  );
}
