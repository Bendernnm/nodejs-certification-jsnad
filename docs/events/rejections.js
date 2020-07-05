const { EventEmitter } = require('events');

EventEmitter.captureRejections = true;

const ee1 = new EventEmitter({ captureRejections: true });

ee1.on('something', async (value) => {
  throw new Error('kaboom');
});

ee1.on('error', console.log);

const ee2 = new EventEmitter({ captureRejections: true });

ee2.on('something', async (value) => {
  throw new Error('kaboom');
});

ee2[Symbol.for('nodejs.rejection')] = console.log;

ee1.emit('something');
ee2.emit('something');
