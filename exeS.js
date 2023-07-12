const prompt = require('prompt-sync')();

let dividendo = parseInt(prompt("Digite um número: "))
let divisor = parseInt(prompt("Digite outro número: "))
let r = 0;

while(dividendo >= divisor){
    dividendo -= divisor
    r++
}
console.log(`${divisor} cabe ${r} vezes no ${divisor * r}`)