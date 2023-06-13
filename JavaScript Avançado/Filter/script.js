function novoAluno(nome, idade){
    return {
        nome, idade
    }
}

let alunos = [
    novoAluno("Luis Eduardo", 18),
    novoAluno("João", 25),
    novoAluno("Ana Júlia",89),
    novoAluno("José",55)
]

/*Uma das formas de filtrar um Array é passando uma função por callback e usar o .filter*/

function menosDe30(aluno){
    return aluno.idade < 30
}

console.log(alunos.filter(menosDe30))