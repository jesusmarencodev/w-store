import { all } from 'redux-saga/effects';
import { productSagas } from './sagas/productSagas';

export default function* rootSaga() {
  yield all([...productSagas]);
}
