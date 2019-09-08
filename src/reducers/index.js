import { combineReducers } from 'redux';
import read from './read';
import firebase from './firebase';
import trello from './trello';

const rootReducer = combineReducers({
  read,
  firebase,
  trello,
});

export default rootReducer;
