const express = require('express')
const server = express()

//usando get -> exatamente como é a url. final (?)
//user -> define o prefixo da url - resto nao importa.
server.use('/api', function(req, res, next){
  console.log('Inicio...')
  next()
  console.log('Fim..')
})

//passar apenas a function como parametro, toda requisição
// passa pela middleware

server.use('/api', function(req, res){
  console.log('Resposta..')
  res.send('<h1>API!</h1>')
})

server.listen(3000, () => console.log('Executando..'))
