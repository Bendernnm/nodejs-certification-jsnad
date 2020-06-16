'use strict'
const { createServer } = require('http')
const { Readable, Transform, pipeline } = require('stream')
const { opendirSync } = require('fs')

const createEntryStream = () => {
  let syntax = '[\n'
  return new Transform({
    writableObjectMode: true,
    readableObjectMode: false,
    transform (entry, enc, next) {
      next(null, `${syntax} "${entry.name}"`)
      syntax = ',\n'
    },
    final (cb) {
      this.push('\n]\n')
      cb()
    }
  })
}

createServer((req, res) => {
  if (req.url !== '/') {
    res.statusCode = 404
    res.end('Not Found')
    return
  }
  const dirStream = Readable.from(opendirSync(__dirname))
  const entryStream = createEntryStream()
  res.setHeader('Content-Type', 'application/json')
  pipeline(dirStream, entryStream, res, (err) => {
    if (err) console.error(err)
  })
}).listen(3000);
