//Como ver a data atual
var data = new Date()

console.log(data)

//Valor inteiro do dia da semana
data = data.getDay()
console.log(data)

//O ano com quatro dígitos  Para ele funcionar precisa estar com a data inteira no Date()
data = data.getFullYear()

data = data.getMonth() // Para ele funcionar precisa estar com a data inteira no Date()

data = data.toLocaleDateString() //A data e a hora local em formato de String
console.log(data)

