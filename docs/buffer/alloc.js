const bufferAlloc = Buffer.alloc(5, 8, 'utf8');

console.log(bufferAlloc);

const bufferAllocUnsafe = Buffer.allocUnsafe(20);

console.log(bufferAllocUnsafe);
