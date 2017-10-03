process.stdout.write('Ta curtindo o curso?\n')
process.stdin.on('data', function(data){
  process.stdout.write(`Sua repsosta foi ${data.toString()} Obrigado!\n`)
  process.exit()
})
