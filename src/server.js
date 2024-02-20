const http = require('node:http')

const server = http.createServer((req, res) => {
  return res.end('Nexus Test')
})

server.listen(3333)