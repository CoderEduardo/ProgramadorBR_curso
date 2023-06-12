let nota1 = [1, 2, 9, 10, 5]
let nota2 = [5, 10, 7, 2, 10]

/*Com o Spread Operetor eu consigo juntar vários arrays em um só*/
let notas = [...nota1,...nota2]

let nome = {
    nome:"Luis",
    sobrenome:"Eduardo",
    user:"luis"
}

let contato = {
    email:"luiseduardo250305@gmail.com",
    tel:"595646189165",
    facebook:"@luiseduardo",
    insta:"@luiseuardo"
}

let cep= {
    cep:"23562366",
    cidade:"São Paulo",
    rua:"adawawdaafafa",
}

/*Conseguimos juntar vários objetos em um só.*/
let usuario = {...nome,...contato,...cep}

console.log(usuario)