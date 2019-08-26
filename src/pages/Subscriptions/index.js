import React from 'react';
import { FlatList } from 'react-native';

import Meetup from '../../components/Meetup';

import Background from '../../components/Background';
import { Container } from './styles';

const meetups = [
  {
    id: 1,
    meetup: {
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
  },
  {
    id: 15,
    meetup: {
      id: 18,
      name: 'Meetup Admiradores do Bob Esponja',
      description:
        'Meetup para reunir todos os admiradores do Bob Esponja no mundo',
      location: 'São Paulo, SP',
      date: '2019-12-20T23:00:00.000Z',
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
  },
];

export default function Subscriptions() {
  return (
    <Background>
      <Container>
        <FlatList
          keyExtractor={meetup => String(meetup.id)}
          data={meetups}
          renderItem={({ item }) => <Meetup meetup={item.meetup} isCancel />}
        />
      </Container>
    </Background>
  );
}
