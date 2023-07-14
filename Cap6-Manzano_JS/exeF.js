const prompt = require("prompt-sync")();

let matrizA = []
let matrizB = []

console.log("Matriz A")
for(let i = 0; i < 5; i++){
    matrizA.push(prompt('Digite qualquer coisa: '))
}
console.log("Matriz B")
for(let i = 0; i < 5; i++){
    matrizB.push(prompt('Digite qualquer coisa: '))
}
let matrizC = matrizA.concat(matrizB)

console.log("Matriz C")
console.log(matrizC)