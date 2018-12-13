import {
  FLUSH,
  APPEND_MESSAGES,
  REQUEST_POSTBOX_ASYNC
} from './ActionTypes';

const appendMessages = messages => ({
  type: APPEND_MESSAGES,
  messages: messages
});


const fetchMessagesAsync = () => ({
  type: REQUEST_POSTBOX_ASYNC
});

const flushMessages = () => ({
  type: FLUSH
});

export {
  flushMessages,
  appendMessages,
  fetchMessagesAsync
};
