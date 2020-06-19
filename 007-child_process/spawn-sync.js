const { spawn } = require('child_process');

const sp = spawn('ls', ['-la'], { stdio: 'inherit' });

sp.stdout.pipe(process.stdout);
