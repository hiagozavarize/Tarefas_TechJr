const prompt = require('prompt-sync')();

let quadrado

for(let i = 15; i <= 200; i += 3){
    quadrado = Math.pow(i, 2)
    console.log(`O quadrado de ${i} é ${quadrado}`)
}
