import {closeNotification, getRow, getNewMessages} from 'Utils/Helpers';
import { store } from 'Store';

document.addEventListener('DOMContentLoaded',function(){
  let closeNotificationBtn = document.querySelector('#close-notif-btn');
  closeNotificationBtn.addEventListener('click', closeNotification);
  store.subscribe(() => getNewMessages(store));
});
