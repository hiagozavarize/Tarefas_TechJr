const prompt = require("prompt-sync")();

let matrizA = []
let matrizB = []

console.log('Digite os números da matriz A:')
for(let i = 0; i < 12; i++){
    matrizA.push(prompt('Digite um número: '))
}

matrizA.forEach(function(numArrB, multNumArrB) {
    if (numArrB % 2 != 0) {
        multNumArrB = numArrB * 2
        matrizB.push(multNumArrB);
    }else{
        matrizB.push(numArrB);
    }
})

console.log(`Essa é a matriz A:\n${matrizA}`)
console.log(`Essa é a matriz B:\n${matrizB}`)