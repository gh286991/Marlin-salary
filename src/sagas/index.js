import { takeEvery } from 'redux-saga/effects';
import getTrello from './getTrello';

export default function* rootSaga() {
  yield takeEvery('GET_TRELLO', getTrello);
}
