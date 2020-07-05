const { StringConverter, ENCODES } = require('./');

const stringConverterUtf8 = new StringConverter('utf-8');

const word = 'hello';

ENCODES.forEach((encodeing) => {
  const stringConverter = new StringConverter(encodeing);

  const convertedString = stringConverter.to(word);
  const convertedStringUtf8 = stringConverterUtf8.to(convertedString,
      stringConverter.encoding);

  console.log(
      `[${stringConverter.encoding}] ${convertedString} | ${convertedStringUtf8}`);
});
