const readline = require('readline');

const cmdline = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let listaCss = [];

console.log("Entre com as propriedades CSS, uma por vez. Digite 'SAIR' ao terminar.");
console.log("Digite '{propriedade} REMOVER' para remover um item da lista.");
console.log(" ")

cmdline.on('line', (input) => {
    let entrada = input.toLowerCase()
    if (listaCss.indexOf(entrada) !== -1) {
        console.log('Já foi adicionada tente outra.')
    }
    else if (entrada === 'sair'){
        console.log('Finalizado')
        console.log(' ')
        cmdline.close()
    }else if(entrada.endsWith(' remover')){
        a = entrada.split(" ")
        listaCss = listaCss.filter(value => value !== a[0]);
        console.log(`Propriedade "${a[0]}" removida.`)
        console.log(" ")
    }else{
        listaCss.push(entrada);
    }
});

cmdline.on('close', () => {
  listaCss.sort();
  console.log('\033c');
  console.log('--------- Propriedades adicionadas ----------')
  for (let propriedade of listaCss) {
    console.log(propriedade);
  }
});