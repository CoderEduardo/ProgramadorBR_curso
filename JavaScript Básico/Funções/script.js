function media(n1,n2){
    var media = (n1 + n2) / 2
    console.log(media)

    //return media podemos além disso retonar um valor
}

media(10,5) 


//Essa também é uma forma de criar uma função dentro de uma variável, passando dentro dela uma função anônima

var saudacao = function(){
    console.log("Olá Mundo")
}

saudacao()


//Essa também é outra forma de se criar uma função, no caso, uma arrow function
var saudacao = () => {
    console.log("Olá Mundo")
}
