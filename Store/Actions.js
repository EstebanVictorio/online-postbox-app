import {
  ADD_LATEST,
  APPEND_MESSAGES,
  REQUEST_POSTBOX_ASYNC
} from './ActionTypes';

const addLatest = messages => ({
  type: ADD_LATEST,
  messages: messages
});

const appendMessages = messages => ({
  type: APPEND_MESSAGES,
  messages: messages
});


const fetchMessagesAsync = () => ({
  type: REQUEST_POSTBOX_ASYNC
});

export {
  addLatest,
  appendMessages,
  fetchMessagesAsync
};
