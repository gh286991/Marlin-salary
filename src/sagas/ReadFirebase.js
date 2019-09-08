/* eslint-disable no-alert, no-console */
import { call, put } from 'redux-saga/effects';
import read from '../tools/firebaseHelper';
// import getMember from '../tools/trelloHelper';
import { readFirebaseSucces, readFirebaseRequest, readFirebasefail } from '../actions/firebase';

// export default function* readFirebase(action) {
//   const { path } = action;
//   try {
//     yield put(readFirebaseRequest());
//     const data = yield call(() => read(path));
//     yield put(readFirebaseSucces(data));
//   } catch (error) {
//     yield put(readFirebasefail());
//   }
// }

export default function* readFirebase(action) {
  const { path } = action;
  try {
    yield put(readFirebaseRequest());
    const data = yield call(() => read());
    console.log(data);
    yield put(readFirebaseSucces(data));
  } catch (error) {
    yield put(readFirebasefail());
  }
}
