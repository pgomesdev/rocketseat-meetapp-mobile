import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  Image,
  InfoContainer,
  Title,
  LocationContainer,
  LocationText,
  Subscribe,
  SubscribeText,
} from './styles';

export default function Meetup({ meetup }) {
  return (
    <Container>
      <Image source={{ uri: meetup.banner.url }} />
      <InfoContainer>
        <Title>{meetup.name}</Title>
        <LocationContainer>
          <LocationText>
            <Icon name="event" size={14} color="#999" /> {meetup.date}
          </LocationText>
          <LocationText>
            <Icon name="place" size={14} color="#999" /> {meetup.location}
          </LocationText>
          <LocationText>
            <Icon name="person" size={14} color="#999" />
            {` Organizador: @${meetup.user.username}`}
          </LocationText>
        </LocationContainer>
        <Subscribe>
          <SubscribeText>Realizar Inscrição</SubscribeText>
        </Subscribe>
      </InfoContainer>
    </Container>
  );
}

Meetup.propTypes = {
  meetup: PropTypes.shape({
    name: PropTypes.string,
    date: PropTypes.string,
    location: PropTypes.string,
    banner: PropTypes.shape({
      url: PropTypes.string,
    }),
    user: PropTypes.shape({
      username: PropTypes.string,
    }),
  }).isRequired,
};
