const obj = {
  a: 1,
  b: 2,
};

Object.defineProperty(obj, 'valueOf', {
  value() {
    return JSON.stringify(obj);
  },
  enumerable: false,
});

const buffer = Buffer.from(obj);

console.log(buffer);
console.log(buffer.toString());
