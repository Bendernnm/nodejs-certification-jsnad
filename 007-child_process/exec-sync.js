const { execSync } = require('child_process');

const output = execSync('ls -la');

console.log(output.toString());
