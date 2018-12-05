import {delay} from 'redux-saga';
import {all, takeEvery, put, select} from 'redux-saga/effects';
import {addLatest} from './Actions';

const sMessages = state => state.messages;

function * printStartSagaMessage(){
  console.log('Watcher Saga started!');
}

function * addMessagesAsync(){
  yield delay(3000);
  yield put(addLatest([{text:'msg 1'},{text:'msg 2'},{text:'msg 3'}]));
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
