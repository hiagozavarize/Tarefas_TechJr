const prompt = require("prompt-sync")();
var soma = 0, fat;

for(i = 0; i < 15; i++){
    num = prompt(`Digite o ${i+1} números que será calculado o fatorial: `);
    for (fat = 1; num > 1; num -= 1){
        fat *= num;
    }
    soma += fat;
}
console.log("A soma dos fatoriais de cada número é:", soma);