const chat = require('./chat');
const ChatApp = chat.ChatApp;
const chatOnMessage = chat.chatOnMessage;
const chatOnMessageLog = chat.chatOnMessageLog;

let webinarChat =  new ChatApp('webinar');
let facebookChat = new ChatApp('=========facebook');
let vkChat =       new ChatApp('---------vk');

webinarChat
  .on('message', chatOnMessageLog)
  .on('message', chatOnMessage);
facebookChat.on('message', chatOnMessage);
vkChat
  .setMaxListeners(2)
  .on('message', chatOnMessageLog)
  .on('message', chatOnMessage)
  .on('close', () => {
  	console.log('Чат вконтакте закрылся :(')
  	vkChat.removeListener('message', chatOnMessage);
	vkChat.removeListener('message', chatOnMessageLog);
  });
  
setTimeout( ()=> {
  vkChat.close();
}, 5000 );

// Закрыть вконтакте
setTimeout( ()=> {
  console.log('Закрываю вконтакте...');
  vkChat.removeListener('message', chatOnMessage);
  vkChat.removeListener('message', chatOnMessageLog);
}, 10000 );

// Закрыть фейсбук
setTimeout( ()=> {
  console.log('Закрываю фейсбук, все внимание — вебинару!');
  facebookChat.removeListener('message', chatOnMessage);
}, 15000 );

setTimeout( ()=> {
  webinarChat.removeListener('message', chatOnMessage);
}, 30000 );