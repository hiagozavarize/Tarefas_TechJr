const prompt = require('prompt-sync')();
const arraydenumeros = []

for(let i = 0; i < 6; i++){
    const num = prompt('digita ai porra : ')
    arraydenumeros.push(parseInt(num))
}

let maior = arraydenumeros[0]
let menor = arraydenumeros[0]

const max = arraydenumeros.forEach( (item) => {
    if(item < menor) menor = item
    else if ( item > maior) maior = item
})

console.log(maior, menor)