const err = new Error();
console.log(err.stack);

// ----------------------------------------------------------------------------

const obj = {};
Error.captureStackTrace(obj);
console.log(obj.stack);
