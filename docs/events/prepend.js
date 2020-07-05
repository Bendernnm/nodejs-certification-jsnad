const { EventEmitter } = require('events');

const eventEmitter = new EventEmitter();

eventEmitter.prependListener('action', () => console.log('Prepend listener'));
eventEmitter.on('action',  () => console.log('!action!'));

eventEmitter.emit('action');
