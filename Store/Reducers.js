import {FLUSH,APPEND_MESSAGES} from './ActionTypes';
const messages = (state = [], action) => {
  switch (action.type) {
    case APPEND_MESSAGES:
      return action.messages;
    case FLUSH:
      return [];
    default:
      return state;
  }
};


export default {
  messages
};
