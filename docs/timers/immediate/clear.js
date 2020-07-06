const immediate = setImmediate(() => console.log('!!!'));

clearImmediate(immediate);
