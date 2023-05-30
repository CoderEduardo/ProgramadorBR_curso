//Criando um objeto
var aluno = { nome: "Luis", notas: [10, 7] }

//var aluno = new Object(); Outra forma de criar um objeto

//Chamando um objeto com o nome da variável . a propriedade
console.log(aluno.notas[1])

/*Outra forma de chamar o Objeto
console.log(aluno["notas"][1])*/

//Uma forma de acrescentar um propriedade depois dele já estar criado
aluno.matricula = 123456

/*Outra forma de adicionar uma propriedade
aluno["sobrenome"] = "Ferreira"*/

//Adicionando mais um valor no Array
aluno.notas[2] = 8
console.log(aluno)

