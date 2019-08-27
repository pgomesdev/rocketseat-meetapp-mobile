import React from 'react';

import createRouter from './routes';

import Header from './components/Header';
import Background from './components/Background';

export default function App() {
  const signed = true;
  const Routes = createRouter(signed);

  return (
    <Background>
      {signed ? <Header /> : null}
      <Routes />
    </Background>
  );
}
