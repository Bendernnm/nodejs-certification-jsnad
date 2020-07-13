const path = require('path');
const { exec } = require('child_process');

const cmd = process.platform !== 'win32' ? 'dir' : 'ls';

const output = exec(cmd, {
  cwd: path.join(process.cwd(), '..', '..', '..'),
}, (error, stdout, stderr) => {
  console.log('-|Error|------------------------------------------------------');
  console.error(error);
  console.log('\n-|stdout|------------------------------------------------------');
  console.log(stdout);
  console.log('\n-|stderr|------------------------------------------------------');
  console.error(stderr.toString());
});

// console.log(output); // child process
