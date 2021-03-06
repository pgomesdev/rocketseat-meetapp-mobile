import React from 'react';
import { useSelector } from 'react-redux';

import createRouter from './routes';

import Header from './components/Header';
import Background from './components/Background';

export default function App() {
  const signed = useSelector(state => state.auth.signed);
  const Routes = createRouter(signed);

  return (
    <Background>
      {signed ? <Header /> : null}
      <Routes />
    </Background>
  );
}
