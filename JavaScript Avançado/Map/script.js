function novoAluno(nome, idade) {
    return { nome, idade }
}

let alunos = [
    novoAluno("Mario", 15),
    novoAluno("Luis", 18),
    novoAluno("João", 80),
    novoAluno("Judas", 55),
    novoAluno("Maria", 90)
]



function nomeIdade(aluno) {
    return aluno.nome + " tem " + aluno.idade + " anos"
}

console.log(alunos.map(nomeIdade))

