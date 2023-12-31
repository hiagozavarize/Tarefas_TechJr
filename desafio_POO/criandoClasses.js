/*
***Desafio:*** 

1. Crie uma classe chamada `Pessoa` que tenha dois campos, `nome` e `idade`. #
2. Crie alguns métodos para pegar e definir o nome e a idade da pessoa. #
3. Crie duas instâncias da classe `Pessoa`, `pessoa1` e `pessoa2`. #
4. Use as instâncias para definir os nomes e as idades das pessoas e, em seguida, imprima os nomes e as idades das pessoas na tela.#
5. Adicione um método chamado `falar` que imprima o nome da pessoa. #
6. Adicione um método chamado `fazerAniversario` que incrementa a idade da pessoa e imprime uma mensagem de aniversário. #
7. Use as instâncias para definir os nomes e as idades das pessoas, falar, fazer aniversário e imprimir os nomes e as idades das pessoas na tela.#
*/

const prompt = require("prompt-sync")();
class Pessoa {
    constructor(nome, idade) {
        this.name = nome;
        this.age = idade;
    }
    get falar(){
        return this.name 
    }
    get felizAnivesario(){
        this.age++
        return `Parabéns pelos ${this.age} anos`
    }
}

const pessoas = []

let continuar
do{

    const nomePessoa = prompt('Digite o nome da pessoa: ')
    const idadePessoa = parseInt(prompt('Digite a idade da pessoa: '))
    const novaPessoa = new Pessoa(nomePessoa, idadePessoa)

    pessoas.push(novaPessoa)

    continuar = parseInt(prompt('Deseja adicionar mais alguém? Sim(1) Não(0)'))

}while(continuar === 1)

pessoas.forEach((pessoa) => {
    for(let i = 0; i < 3; i++){
        console.log(`${pessoa.falar} ${pessoa.felizAnivesario}`)
    } 
})
