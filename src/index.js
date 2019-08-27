import React from 'react';
import { StatusBar } from 'react-native';

import App from './App';

export default function index() {
  return (
    <>
      <StatusBar backgroundColor="#402845" barStyle="light-content" />
      <App />
    </>
  );
}
