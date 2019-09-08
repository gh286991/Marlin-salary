import { call, put } from 'redux-saga/effects';
import { getMember, getList } from '../tools/trelloHelper';
import {
  getTrelloRequest,
  getTrelloMemberSucces,
  getTrelloListSuccess,

} from '../actions/trello';

export default function* getTrello() {
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
