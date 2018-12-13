import {delay} from 'redux-saga';
import {all, takeEvery, put, select} from 'redux-saga/effects';
import {appendMessages,flushMessages} from './Actions';
import {fetchMessages} from 'Utils/Helpers';
const sMessages = state => state.messages;

function * printStartSagaMessage(){
  console.log('Watcher Saga started!');
}

function * addMessagesAsync(){
  let jsonResponse = yield fetchMessages()
    .then(response => response.json())
    .then(json => json);
  if(typeof jsonResponse.messages !== 'undefined'){
    if(jsonResponse.messages.length > 0){
      console.log(`%c ${jsonResponse.messages.length } Found!',
        'background-color: green;color: whitesmoke; font-weight: bold`);
        yield put(appendMessages(jsonResponse.messages));
        yield put(flushMessages());
    }else{
      console.log('No messages found. Queue Empty.',
        'background-color: orange; color: whitesmoke; font-weight-bold');
    }
  }else{
    console.log('%c Error!',
      'background: red;color: whitesmoke; font-weight-bold');
  }
}

function * watchAddMessagesAsync(){
  yield takeEvery('REQUEST_POSTBOX_ASYNC',addMessagesAsync);
}

function * masterSaga(){
  yield all([
    printStartSagaMessage(),
    watchAddMessagesAsync()
  ]);
}

export {masterSaga};
