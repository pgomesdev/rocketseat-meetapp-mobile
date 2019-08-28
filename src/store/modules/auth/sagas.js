import { Alert } from 'react-native';
import { all, takeLatest, call, put } from 'redux-saga/effects';

import api from '../../../services/api';

import { AUTH_SIGN_IN_REQUEST, signInSuccess, signFailure } from './actions';

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;

    const response = yield call(api.post, '/sessions', { email, password });

    yield put(signInSuccess(response.data));
  } catch (e) {
    Alert.alert('Um erro ocorreu enquanto o login era feito. Tente novamente.');

    yield put(signFailure());
  }
}

export default all([takeLatest(AUTH_SIGN_IN_REQUEST, signIn)]);
