const closeNotification = () => {
  let notification = document.querySelector('.notification-alert');
  notification.classList.remove('notification-alert-appear');
  notification.classList.add('notification-alert-disappear');
};
export {
  closeNotification
};
