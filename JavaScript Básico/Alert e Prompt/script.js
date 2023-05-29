var nome = prompt("Digite o seu nome: ")    //prompt é uma forma de pegar uma informação do usuário e trabalhar com ela 
var numero = parseInt(prompt("Digite um número " + nome + " : "))  /*precisamos transformar em um número, pois por padrão qualquer informação que vem do 
prompt é uma String*/

var dobro = numero * 2

alert(nome + ", o dobro de " + numero + " é " + dobro)