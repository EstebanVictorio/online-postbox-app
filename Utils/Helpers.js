const closeNotification = () => {
  let notification = document.querySelector('.notification-alert');
  notification.classList.remove('notification-alert-appear');
  notification.classList.add('notification-alert-disappear');
};

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

const getNewMessages = store => {
  let table = document.querySelector('.table');
  let messages = store.getState().messages;
  if(messages.length > 0){
    messages.map(message => table.appendChild(getRow(message.text)));
    store.dispatch({type:'FLUSH'});
  }
};

const fetchMessages = () => {
  let config = { method: 'POST' };
  return fetch('http://localhost:8888/postbox',config);
}

export {
  closeNotification,
  getRow,
  getNewMessages,
  fetchMessages
};
