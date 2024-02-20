const http = require('node:http')

const server = http.createServer((req, res) => {
  const { method, url } = req

  if (method == 'GET' && url == '/users') {
    return res.end('Listagem de usuários')
  }

  if (method == 'POST' && url == '/users') {
    return res.end('Criação de usuário')
  }

  return res.end('Nexus Default Res')
})

server.listen(3333)