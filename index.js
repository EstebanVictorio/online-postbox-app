import {closeNotification, getRow, getNewMessages} from 'Utils/Helpers';
import { store } from 'Store';

document.addEventListener('DOMContentLoaded',function(){
  let closeNotificationBtn = document.querySelector('#close-notif-btn');
  closeNotificationBtn.addEventListener('click', closeNotification);
  store.subscribe(() => getNewMessages(store));
  setTimeout(() => store.dispatch({type:'REQUEST_POSTBOX_ASYNC'}),5000);
  setInterval(
    () => store.dispatch({type:'REQUEST_POSTBOX_ASYNC'}), (1000 * 10));
});
