export const GET_TRELLO = 'GET_TRELLO';
export const GET_TRELLO_REQUEST = 'GET_TRELLO_REQUEST';
export const GET_TRELLO_MEMBER_SUCECESS = 'GET_TRELLO_MEMBER_SUCECESS';
export const GET_TRELLO_MEMBER_FAIL = 'GET_TRELLO_MEMBER_FAIL';
export const GET_TRELLO_LIST_SUCCECSS = 'GET_TRELLO_LIST_SUCCECSS';
export const GET_TRELLO_LIST_FAIL = 'GET_TRELLO_LIST_FAIL';


export function getTrello() {
  return {
    type: GET_TRELLO,
  };
}

export function getTrelloRequest() {
  return {
    type: GET_TRELLO_REQUEST,
  };
}

export function getTrelloMemberSucces(data) {
  return {
    type: GET_TRELLO_MEMBER_SUCECESS,
    payload: data,
  };
}

export function getTrelloMemberFail() {
  return {
    type: GET_TRELLO_MEMBER_FAIL,
  };
}

export function getTrelloListSuccess(data) {
  return {
    type: GET_TRELLO_LIST_SUCCECSS,
    payload: data,
  };
}

export function getTrelloListFail() {
  return {
    type: GET_TRELLO_LIST_FAIL,
  };
}
