'use strict';
const { execSync } = require('child_process');

try {
  const cmd = process.platform !== 'win32' ? 'dir' : 'ls';

  const output = execSync(cmd);

  console.log(output.toString());
} catch (err) {
  console.error('CAUGHT ERROR:', err);
}
