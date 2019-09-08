import config from '../config/config.trello';

const {
  board, key, token, month,
} = config;


export const getMember = function getMember() {
  return fetch(`https://api.trello.com/1/boards/${board}/members?key=${key}&token=${token}`)
    .then((res) => res.json());
};


export const getList = function getList() {
  return fetch(`https://api.trello.com/1/lists/${month}/cards?key=${key}&token=${token}`)
    .then((res) => res.json());
};

export default {
  getMember,
  getList,
};
