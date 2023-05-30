/*//Uma das formas de se criar um Array
var nome = new Array("Luis", "Marta", "José", "Felipe")

//Outra forma de criar um Array
var numero = [1, 15, 20, 80]
console.log(numero.length)  //O .length mostra quantos índices nós temos no Array

*/

/*//Uma forma simples de mostrar na tela todos elementos de um Array  

var nome = ["Luis", "Marta", "José", "Felipe", "Ana", "Carlos", "Felipe", "Pablo"]

for (var i = 0; i <= nome.length; i++) {
    console.log(nome[i])
}*/

var nomes = ["Luis", "Marta", "José", "Felipe", "Ana", "Carlos", "Felipe", "Pablo"]

//Usando o of, cada vez que ele percorrer o Array ele vai pegar o índice e depois o próximo, até percorrer todo o Array
for (var nome of nomes ){
    console.log(nome)
}

