const { exec } = require('child_process')

exec(
    `${process.execPath} -e "console.log('A'); throw Error('B')"`,
    (err, stdout, stderr) => {
      console.log('-|Error|------------------------------------------------------');
      console.error(err);
      console.log('\n-|stdout|------------------------------------------------------');
      console.log(stdout);
      console.log('\n-|stderr|------------------------------------------------------');
      console.error(stderr.toString());
    }
)
