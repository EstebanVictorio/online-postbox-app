import {closeNotification} from 'Utils/Helpers';

import { store } from 'Store';

const getRow = (text) => {
  const row = document.createElement('div');
  const label1 = document.createElement('label');
  const label2 = document.createElement('label');
  row.classList.add('row');
  label1.innerHTML = 'New';
  label2.innerHTML = text;
  label1.classList.add('label-1');
  label2.classList.add('label-2');
  row.appendChild(label1);
  row.appendChild(label2);
  return row;
};

const getNewMessages = () => {
  let table = document.querySelector('.table');
  let allLatestMessages = store.getState().latestMessages;
  console.log('before ask latest messages');
  if(allLatestMessages.length > 0){
    console.table(allLatestMessages);
    allLatestMessages.map(message => table.appendChild(getRow(message.text)));
    store.dispatch({type:'ADD_LATEST',messages: []});
    store.dispatch({type:'APPEND_MESSAGES',messages: allLatestMessages});
  }
};

// function requestMessagesAsync(){
//   store.dispatch({type:'REQUEST_POSTBOX_ASYNC'});
// }

document.addEventListener('DOMContentLoaded',function(){
  let closeNotificationBtn = document.querySelector('#close-notif-btn');
  closeNotificationBtn.addEventListener('click', closeNotification);
  let appendBtn = document.querySelector('#append');
  appendBtn.addEventListener('click',requestMessagesAsync);

});
store.subscribe(getNewMessages);
