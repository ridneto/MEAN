const express = require('express')
const server = express()

server.route('/clientes')
  .get((req, resp) => res.send("Lista de cliente"))
  .post((req, resp) => res.send('Novo cliente'))
  .put((req, res) => res.sed('Altera cliente'))
  .delete((req, res) => res.send('Remove cliente'))

server.listen(3000, () => console.log('Executando..'))
