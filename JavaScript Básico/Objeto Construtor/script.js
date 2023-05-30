//Criar uma função que adiciona nomes de alunos dentro de um Array, e depois calcular a média e mostrar na tela
/*
function adicionarAluno(nome,n1,n2){
    return{
        nome:nome,
        nota1:n1,
        nota2:n2,
        media: function(){
            return (this.nota1 + this.nota2) / 2
        }
    }
}

var turmas = [
    adicionarAluno("Luis",10,9),
    adicionarAluno("José",5,1),
    adicionarAluno("Maria",10,5)
]

for(var aluno of turmas){
    console.log("Aluno(a): " + aluno.nome + " nota 1: " + aluno.nota1 + " - " + "nota 2: " + aluno.nota2 + " - " + "média: " + aluno.media())
} */

//Criando um Método construtor de forma simples

function aluno(nome, nota1, nota2) {
    this.nome = nome,
        this.nota1 = nota1,
        this.nota2 = nota2,
        this.media = function () {
            return (this.nota1 + this.nota2) / 2
        }
}

var aluno = new aluno("Luis Eduardo",10,7)

console.log(aluno.media())

