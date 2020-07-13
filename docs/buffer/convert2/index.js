const ENCODES = [
  'hex',
  'utf-8',
  'base64',
  'utf16le',
  'latin1',
  'ascii',
  'ucs2',
];

class StringConverter {
  constructor(encoding) {
    this.encoding = encoding;
  }

  to(string, from = 'utf-8') {
    if (!ENCODES.includes(from)) {
      throw new Error('Incorrect encoding');
    }

    return Buffer.from(string, from).toString(this.encoding);
  }
}

module.exports = { StringConverter, ENCODES };
