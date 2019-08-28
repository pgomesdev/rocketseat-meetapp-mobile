/* eslint-disable import/no-extraneous-dependencies */
import Reactotron from 'reactotron-react-native';
import reactotronSaga from 'reactotron-redux-saga';
import { reactotronRedux } from 'reactotron-redux';

if (__DEV__) {
  const tron = Reactotron.configure({ host: '192.168.0.13' })
    .useReactNative()
    .use(reactotronSaga())
    .use(reactotronRedux())
    .connect();

  tron.clear();

  console.tron = tron;
}
