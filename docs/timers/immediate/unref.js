const immediate = setImmediate(() => console.log('call'));

console.log('1');

immediate.unref();

console.log('2');

