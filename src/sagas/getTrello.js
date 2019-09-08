import { call, put } from 'redux-saga/effects';
import { getMember, getList } from '../tools/trelloHelper';
import {
  getTrelloRequest,
  getTrelloMemberSucces,
  getTrelloListSuccess,

} from '../actions/trello';

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

export default function* getTrello(action) {
  try {
    yield put(getTrelloRequest());
    const member = yield call(() => getMember());
    yield put(getTrelloMemberSucces(member));
    const list = yield call(() => getList());
    yield put(getTrelloListSuccess(list));
  } catch (error) {
    // yield put(readFirebasefail());
  }
}
