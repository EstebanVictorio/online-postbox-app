import {ADD_LATEST,APPEND_MESSAGES} from './ActionTypes';
const messages = (state = [], action) => {
  switch (action.type) {
    case APPEND_MESSAGES:
    console.log(action.messages);
      return [
        ...state,
        ...action.messages
      ];
    default:
      return state;
  }
};

const latestMessages = (state = [],action) => {
  switch (action.type) {
    case ADD_LATEST:
      state = action.messages;
      return state;
      break;
    default:
      return state;
  }
}


export default {
  messages,
  latestMessages
};
