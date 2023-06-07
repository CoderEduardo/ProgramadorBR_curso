/*Uma Arrow Function é uma forma reduzida de se escrever uma função anônima*/

/*let dobro = (x) => {
    return 2*x
}*/

/*Quando temos apenas um parêmetro, e vamos apenas retornar algum valor com a arrow function, podemos escrever ela de uma forma mais simples ainda*/
/*Não precisamos colocar o parênteses, chaves e o return*/
let dobro = x => 2*x
console.log(dobro(10))

/*O único problema de se usar uma arrow function, é que ela não entende o elemento this, pois para ela o this sempre vai ser o window, e não o objeto 
utilizado*/