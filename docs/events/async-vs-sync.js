const { EventEmitter } = require('events');

const eventEmitter = new EventEmitter();

eventEmitter.on('action', () => process.nextTick(() => console.log('action1')));
eventEmitter.on('action', () => console.log('action2'));
eventEmitter.on('action', () => console.log('action3'));

eventEmitter.emit('action');
