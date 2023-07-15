const prompt = require("prompt-sync")();

let matrizA = []
let matrizB = []

function verificador(matriz){
    if(matriz % 2 == 0 && matriz % 3 == 0){
        matrizA.push(matriz)
    }else if(matriz % 5 == 0){
        matrizB.push(matriz)
    }
}
console.log('Digite os números e eles seram organizados nas matrizes conforme as leis de formação:')
for(let i = 0; i < 20; i++){
    verificador(prompt('Digite um número: '))
}

let matrizC = matrizA.concat(matrizB)

console.log("matriz A (Só aceita números divisíveis por 2 e 3 ao mesmo tempo):")
console.log(matrizA)

console.log("matriz B (Só aceita números múltiplos de 5):")
console.log(matrizB)

console.log("A matriz C é a junção da matriz A e B:")
console.log(matrizC)