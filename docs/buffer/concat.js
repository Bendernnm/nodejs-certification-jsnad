const buffer1 = Buffer.alloc(5, 1);
const buffer2 = Buffer.alloc(8, 2);
const buffer3 = Buffer.alloc(10, 3);

const buffer4 = Buffer.concat([buffer1, buffer2, buffer3], 20);

console.log(Buffer.isBuffer(buffer4));
console.log(buffer4);
