const { Writable } = require('stream');

const createWriteStream = (data) => {
  return new Writable({
    highWaterMark: 32,
    objectMode   : true,
    write(chunk, enc, next) {
      data.push(chunk);
      next();
    },
  });
};

const data = [];
const writable = createWriteStream(data);

writable.on('finish', () => {
  console.log('finished writing:');
  data.forEach((chunk) => {
    console.log(`\t${chunk.toString()}`);
  });
});

writable.write('A\n');
writable.write(1);
writable.write({ a: 2 });
writable.end('nothing more to write');
