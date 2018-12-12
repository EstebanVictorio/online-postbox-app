import {delay} from 'redux-saga';
import {all, takeEvery, put, select} from 'redux-saga/effects';
import {addLatest} from './Actions';
import {fetchMessages} from 'Utils/Helpers';
const sMessages = state => state.messages;

function * printStartSagaMessage(){
  console.log('Watcher Saga started!');
}

function * addMessagesAsync(){
  let jsonResponse = yield fetchMessages()
    .then(response => response.json())
    .then(json => json);
  if(Array.isArray(jsonResponse.messages)){
    yield put(addLatest(jsonResponse.messages));
  }else{
    console.log('Error: no array');
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
