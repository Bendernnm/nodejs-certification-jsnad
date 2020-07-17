const { Transform } = require('stream');

const createTransformStream = () => {
  return new Transform({
    decodeStrings: false,
    encoding     : 'utf-8',
    transform(chunk, enc, next) {
      next(null, chunk.split('').reverse().join(''));
    },
  });
};

const transform = createTransformStream();

transform.on('data', (data) => {
  console.log('got data:', data);
});
transform.on('finish', () => {
  console.log(transform.response);
});

transform.write('A');
transform.write('B');
transform.write('C');
transform.end('nothing');
