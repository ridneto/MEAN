const _ = require('lodash')

const alunos = [{
  nome: 'Joao',
  nota: 8.5
}, {
  nome: 'Maria',
  nota: 9
}, {
  nome: 'Pedro',
  nota: 9.5
}]

const media = _.sumBy(alunos, 'nota') 

console.log(media)
