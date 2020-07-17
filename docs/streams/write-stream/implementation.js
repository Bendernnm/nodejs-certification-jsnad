const { Writable } = require('stream');

const createWriteStream = (data) => {
  // decodeStrings: false,
  return new Writable({
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
  data.forEach(chunk => console.log(`\t${chunk.toString()}`));
});

writable.write('A\n');
writable.write('B\n');
writable.write('C\n');
writable.end('nothing more to write');
