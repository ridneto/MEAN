const http = require('http')
const server = http.createServer(function(req, resp){
  res.writeHead(200, {"Content-Type": "text/html"})
  res.end('<h1>Acho que você deve usar Express, not?</h1>')
})

const porta = 3456
server.listen(porta, function(){
  console.log(`Escutando a ${porta}`)
})
