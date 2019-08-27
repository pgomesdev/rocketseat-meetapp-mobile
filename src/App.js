import React from 'react';
import { StatusBar } from 'react-native';

import Profile from './pages/Profile';

// import { Container } from './styles';

export default function App() {
  return (
    <>
      <StatusBar backgroundColor="#402845" barStyle="light-content" />
      <Profile />
    </>
  );
}
