/*Criando uma programa em js que pega a média de quatro turmar e faz uma média geral das salas*/

let turma1 = [10, 5, 8, 6, 7]
let turma2 = [8, 1, 10, 2, 4]
let turma3 = [5, 2, 1, 7, 8]
let turma4 = [9, 4, 7, 2, 10]

let todasTurmas = [...turma1, ...turma2, ...turma3, ...turma4]

function somarNotas() {
    let soma = 0
    for (let i = 0; i < todasTurmas.length; i++) {
       var notas =  parseFloat(soma += todasTurmas[i])
    }
    return notas
}

function media() {
    let notas = somarNotas()
    let media = parseFloat(notas / todasTurmas.length)
    console.log(media)
}

media()

/*
Valor x Referência

    Quando se trata de arrays e de objetos, ao passar o mesmo valor de um para o outro, na real, estamos fazendo referência a ele, e não em si atribuindo o
    seu valor, e uma forma de passar o seu valor real, e não de fazer uma ligação com ele, podemos usar o [...nomeDoArray] para passar o seu valor. 
    Permitindo que ao atribuir outro valor para ele não acabe acorrendo uma sobreposição
    Ex:
    let alunoA = {nome:"Luis",idade:15}
    let alunoB = {...alunoA}
    alunoB.idade = 25
*/