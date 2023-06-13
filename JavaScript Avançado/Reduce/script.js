function novoAluno(nome,idade){
    return {nome, idade}
}

let alunos = [
    novoAluno("Luis",25),
    novoAluno("José",45),
    novoAluno("Reinaldo",20),
    novoAluno("Jair",42)
]

//A função precisa de dois parâmetros, o total que no começo vai ser 0, e a idade dos alunos
function idadeTurma(total, aluno){
    return total + aluno.idade
}

//Reduz todos os alunos dentro de um só array, e concatena os seus valores
console.log(alunos.reduce(idadeTurma,0))