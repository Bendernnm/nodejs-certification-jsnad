const { Readable } = require('stream');

const createReadStream = () => {
  const data = ['some', 'data', 'to', 'read'];
  return new Readable({
    read() {
      if (data.length === 0) this.push(null);
      else this.push(data.pop());
    },
  });
};

const readable = createReadStream();

readable.on('data', (data) => { console.log('got data', data); });
readable.on('end', () => { console.log('finished reading'); });
