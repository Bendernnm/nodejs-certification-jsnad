const immediate1 = setImmediate(() => console.log('call-1'));
const immediate2 = setImmediate(() => immediate1.ref());

console.log('1');

immediate1.unref();

console.log('2');

