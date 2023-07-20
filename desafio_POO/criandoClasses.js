/*
***Desafio:*** 

1. Crie uma classe chamada `Pessoa` que tenha dois campos, `nome` e `idade`. #
2. Crie alguns métodos para pegar e definir o nome e a idade da pessoa. #
3. Crie duas instâncias da classe `Pessoa`, `pessoa1` e `pessoa2`. #
4. Use as instâncias para definir os nomes e as idades das pessoas e, em seguida, imprima os nomes e as idades das pessoas na tela.
5. Adicione um método chamado `falar` que imprima o nome da pessoa. #
6. Adicione um método chamado `fazerAniversario` que incrementa a idade da pessoa e imprime uma mensagem de aniversário. #
7. Use as instâncias para definir os nomes e as idades das pessoas, falar, fazer aniversário e imprimir os nomes e as idades das pessoas na tela.
*/

const prompt = require("prompt-sync")();

class Pessoa {
    constructor(nome, idade) {
        this._nome = nome;
        this._idade = idade;
    }
    nomear(novoNome){
        this._nome = novoNome
    }
    inseriIdade(novaIdade){
        this._idade = novaIdade
    }
    get falar(){
        return this._nome
    }
    get felizAnivesario(){
        return console.log(`Parabéns pelos ${this._idade} anos!`)
    }

}

let pessoas = []

do{

    const nomePessoa = prompt('Digite o nome da pessoa: ')
    const idadePessoa = parseInt(prompt('Digite a idade da pessoa: '))
    const novaPessoa = new Pessoa(nomePessoa, idadePessoa)

    pessoas.push(novaPessoa)

    continuar = parseInt(prompt('Deseja adicionar mais alguém? Sim(1) Não(0)'))

}while(continuar === 1)

pessoas.forEach((pessoa) => {
    console.log(`${pessoa.falar} ${pessoa.felizAnivesario}`)
    
})

// const nomePessoa1 = prompt('Digite o nome da pessoa: ')
// const idadePessoa1 = parseInt(prompt('Digite a idade da pessoa: '))
// const pessoa1 = new Pessoa(nomePessoa1, idadePessoa1)

// const nomePessoa2 = prompt('Digite o nome da pessoa: ')
// const idadePessoa2 = parseInt(prompt('Digite a idade da pessoa: '))
// const pessoa2 = new Pessoa(nomePessoa2, idadePessoa2)

// console.log(`${pessoa1.falar} ${pessoa1.felizAnivesario}`)
// console.log(`${pessoa2.falar} ${pessoa2.felizAnivesario}`)