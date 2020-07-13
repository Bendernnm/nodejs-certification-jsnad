const path = require('path');
const { execFileSync } = require('child_process');

const result = execFileSync('./run/log.js');

console.log(result.toString());
