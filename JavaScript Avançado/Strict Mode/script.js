/*Conseguimos criar varáveis apenas usando o seu nome e o seu valor, sem precisar usar o "let" ou "var", o grande problema disso é que essas variáveis 
assumem um escopo global, e isso pode dar problemas no seu código, caso você crie uma variável dentro de uma função, ela vai poder ser acessada de fora, 
causando alguns bugs. Uma forma de corrgir isso é usando o "use strict", que vai obrigar todas as variáveis que vão ser criadas a ser declaradas com 
var o let.*/

"use strict"

function imprimir() {
    x = 10
    console.log(x)
}

imprimir()

/*Ele não vai rodar, pois o "use strict" não permitiu, sem o "use stritct" rodaria normalmente, podendo casusar alguns bugs no futuro*/