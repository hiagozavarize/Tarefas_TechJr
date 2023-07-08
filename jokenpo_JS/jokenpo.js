const prompt = require("prompt-sync")();

let machineOptions = ['Pedra', 'Papel', 'Tesoura']
let playerOptions  = ['Pedra', 'Papel', 'Tesoura']

//essa função sorteia randomicamente um número de 0 a 2
const randomNumber = () => 
    Math.floor(Math.random() * (2 - 0 + 1)) + 0
//o número sorteado na função anterior é a posição do item no array "machine"
const machineChoice = () => 
    machineOptions[randomNumber(0, machineOptions.length - 1)]

//console.log(machineChoice())

console.log("Escolha:")
let player = prompt("Pedra(0) Papel(1) Tesoura(2) ")

const playerChoice = () => 
    playerOptions[(0, playerOptions.length - 1)]

console.log(playerChoice())
