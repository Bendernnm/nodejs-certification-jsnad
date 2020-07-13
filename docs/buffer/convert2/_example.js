const { StringConverter } = require('./');

const stringConverterUtf8 = new StringConverter('utf-8');
const stringConverterHex = new StringConverter('hex');
const stringConverterBase64 = new StringConverter('base64');

const testString = 'hello world!';

const testStringHex = stringConverterHex.to(testString);
const testStringBase64 = stringConverterBase64.to(testString);

console.log(`hex = ${testStringHex}`);
console.log(`base64 = ${testStringBase64}`);

const testStringHex2Utf8 = stringConverterUtf8.to(testStringHex,
    stringConverterHex.encoding);
const testStringBase642Utf8 = stringConverterUtf8.to(testStringBase64,
    stringConverterBase64.encoding);

console.log(`hex 2 utf8 = ${testStringHex2Utf8}`);
console.log(`base64 2 utf8 = ${testStringBase642Utf8}`);
