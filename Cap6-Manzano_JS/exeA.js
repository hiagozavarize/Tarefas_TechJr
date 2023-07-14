const prompt = require("prompt-sync")();

let nomes = []

for(let i = 0; i < 10; i++){
    nomes.push(prompt('Digite um nome: '))
}
console.log(nomes)
