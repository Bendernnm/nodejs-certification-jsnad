const buf = Buffer.from('hello world', 'utf8');

console.log(buf.toString('hex'));
console.log(buf.toString('base64'));

console.log(Buffer.from('qwerty', 'utf8'));
console.log(Buffer.from('qwerty', 'utf16le'));
