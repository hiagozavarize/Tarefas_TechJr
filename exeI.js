const prompt = require("prompt-sync")();

console.log("Sequência de Fibonacci");

const guardaSequencia = []
var atual = 0, anterior = 1, proximo; 
var numSeq = prompt("Até que posição tu quer ir na sequência?: ");

console.log("Tome essa sequência meu chegado");

for(i = 0; i < numSeq; i++){
    guardaSequencia.push(atual);
    proximo = atual + anterior;
    anterior = atual;
    atual = proximo;
}
console.log(guardaSequencia);

