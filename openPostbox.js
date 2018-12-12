var Postbox = require('./Queue/Agent/Postbox');
var messages = [];
var postbox = new Postbox();
postbox.connectToRabbitMQ().then(({close, messages}) => {
  console.log('Messages found!:');
  console.log(messages);
  close();
});
