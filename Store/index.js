import {createStore, combineReducers, applyMiddleware} from 'redux';
import Reducers from './Reducers';
import {appendMessages,fetchMessagesAsync} from './Actions';
import createSagaMiddleware from 'redux-saga';
import {masterSaga} from './Sagas';
const sagaMiddleware = createSagaMiddleware();
let store =
  createStore(combineReducers(Reducers), applyMiddleware(sagaMiddleware));
sagaMiddleware.run(masterSaga);
export {
  store,
  appendMessages,
  fetchMessagesAsync,
  masterSaga
};
