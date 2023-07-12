const prompt = require("prompt-sync")();

let valor = parseInt(prompt("Digite um número: "))

let maior = valor
let menor = valor

while(valor >= 0){
    if(valor > maior){
        maior = valor
    }else if(valor < menor){
        menor = valor
    }
    valor = parseInt(prompt("Digite um número: "))
}
console.log(`O maior número é ${maior} e o menor número é ${menor}`)
