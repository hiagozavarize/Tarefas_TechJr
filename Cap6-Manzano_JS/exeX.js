const prompt = require("prompt-sync")();

function verificadorIndice(array){
    let matrizB = []
    for(let i = 0; i < array.length; i++){
        if(i % 2 === 0){
            if(i + 1 < array.length){
                matrizB[i + 1] = array[i]
            }
            
        }else{
            matrizB[i - 1] = array[i]
        }
    }
    return matrizB
}

let matrizA = []

for(let i = 0; i < 6; i++){
    matrizA.push(parseFloat(prompt(('digita um número: '))))
}
console.log(matrizA)

console.log(verificadorIndice(matrizA))






