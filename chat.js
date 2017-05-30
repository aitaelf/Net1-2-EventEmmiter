const EventEmitter = require('events');

class ChatApp extends EventEmitter {
  /**
   * @param {String} title
   */
  constructor(title) {
    super();

    this.title = title;
		
		this.close = () => {
			this.emit('close');
		};
		
    // Посылать каждую секунду сообщение
    setInterval(() => {
      this.emit('message', `${this.title}: ping-pong`);
  }, 1000);
  }
}

let chatOnMessage = (message) => {
  console.log(message);
};

let chatOnMessageLog = () => {
  console.log('Готовлюсь к ответу');
};

module.exports = {
	ChatApp,
	chatOnMessage,
	chatOnMessageLog
};