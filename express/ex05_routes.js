const express = require('express')
const router = express.Router()

router.use((req, res, next) => {
  const init = Date.now()
  next()
  console.log(`Tempo = ${Date.now() - init} ms.`)
})

router.get('/produtos/:id/:name', (resq, res) => {
  res.json({id: req.params.id, name: req.params.name})
})

router.get('/clientes/:id', (resq, res) =>{
  res.json({id: req.params.id, name: 'Joao'})
})

module.exports = router
