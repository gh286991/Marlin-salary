import {
  GET_TRELLO_REQUEST,
  GET_TRELLO_MEMBER_SUCECESS,
  GET_TRELLO_LIST_SUCCECSS,

} from '../actions/trello';


const initialState = {
  isLoading: false,
  data: '尚未載入資料',
};


export default function readFirebase(state = initialState, action) {
  switch (action.type) {
    case GET_TRELLO_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }

    case GET_TRELLO_MEMBER_SUCECESS: {
      const data = action.payload;
      return {
        ...state,
        isLoading: false,
        member: data,
      };
    }
    case GET_TRELLO_LIST_SUCCECSS: {
      const data = action.payload;
      return {
        ...state,
        isLoading: false,
        list: data,
      };
    }
    // case READ_FIREBASE_FAIL: {
    //   const data = '讀取失敗';
    //   return {
    //     ...state,
    //     isLoading: false,
    //     data,
    //   };
    // }
    default:
      return state;
  }
}
