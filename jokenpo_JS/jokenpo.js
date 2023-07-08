const prompt = require("prompt-sync")();

let machineOptions = ['Pedra', 'Papel', 'Tesoura']
let playerOptions  = ['Pedra', 'Papel', 'Tesoura']

console.log("===== JOKENPÔ =====")
do{
    console.log("Escolha:")
    let player = prompt("Pedra(0) Papel(1) Tesoura(2) ")
    console.log("===================")
    //essa função sorteia randomicamente um número de 0 a 2
    const randomNumber = () => 
    Math.floor(Math.random() * (2 - 0 + 1)) + 0
    //o número sorteado na função anterior é a posição do item no array "machine"
    const machineChoice = machineOptions[randomNumber(0, machineOptions.length - 1)]
    //console.log(machineChoice())
    const playerChoice = playerOptions[player]

    if(playerChoice == machineChoice){
        console.log("Empate")
        console.log(`vc escolheu ${playerChoice} e a maquina escolheu ${machineChoice}`)
    }else if(playerChoice == 'Pedra' && machineChoice == 'Tesoura'){
        console.log(`vc escolheu ${playerChoice} e a maquina escolheu ${machineChoice}`)
        console.log("Vc ganhou")  
    }else if(playerChoice == 'Tesoura' && machineChoice == 'Papel'){
        console.log(`vc escolheu ${playerChoice} e a maquina escolheu ${machineChoice}`)
        console.log("Vc ganhou")  
    }else if(playerChoice == 'Papel' && machineChoice == 'Pedra'){
        console.log(`vc escolheu ${playerChoice} e a maquina escolheu ${machineChoice}`)
        console.log("Vc ganhou")  
    }else if(playerChoice == 'Tesoura' && machineChoice == 'Pedra'){
        console.log(`vc escolheu ${playerChoice} e a maquina escolheu ${machineChoice}`)
        console.log("a maquina ganhou")  
    }else if(playerChoice == 'Papel' && machineChoice == 'Tesoura'){
        console.log(`vc escolheu ${playerChoice} e a maquina escolheu ${machineChoice}`)
        console.log("a maquina ganhou")   
    }else if(playerChoice == 'Pedra' && machineChoice == 'Papel'){
        console.log(`vc escolheu ${playerChoice} e a maquina escolheu ${machineChoice}`)
        console.log("a maquina ganhou")   
    }
    console.log("===================")
    reset = prompt("Jogar novamente? Sim(1) Não(0) ")

}while(reset == 1)

