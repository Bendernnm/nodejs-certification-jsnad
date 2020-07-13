const path = require('path');
const { execSync } = require('child_process');

const cmd = process.platform === 'win32' ? 'dir' : 'ls'

const output = execSync(cmd, {
  cwd: path.join(process.cwd(), '..', '..', '..'),
});

console.log(output.toString());
