const errorsConstructors = [
  EvalError,
  SyntaxError,
  RangeError,
  ReferenceError,
  TypeError,
  URIError,
];

errorsConstructors.forEach((ErrorConstructor) => {
  try {
    throw new ErrorConstructor();
  } catch (err) {
    console.error(err);
  }
});

