import { takeEvery } from 'redux-saga/effects';
import readAPI from './readAPI';
import readFirebase from './ReadFirebase';
import getTrello from './getTrello';

export default function* rootSaga() {
  yield takeEvery('READ_API', readAPI);
  yield takeEvery('READ_FIREBASE', readFirebase);
  yield takeEvery('GET_TRELLO', getTrello);
}
