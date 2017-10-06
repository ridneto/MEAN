//console.log(process.argv) <- ver os argumentos da chamada

function temParam(param){
  return process.argv.indexOf(param) != -1
}
if(temParam('--producao')){
  console.log('Atenção total!')
}else{
  console.log('Sussa')
}
