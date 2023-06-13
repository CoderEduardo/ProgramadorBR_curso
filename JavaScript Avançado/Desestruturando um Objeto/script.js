let aluno = {
    matricula:'1234',
    nome:"Marcos",
    telefone:"465161586",
    cidade:"Jacuntinga"
}

//Uma forma de destruturar um objeto
let {matricula} = aluno
console.log(matricula)

//Conseguimos também desestruturar um array.
let nomes = ['Luis','Marcos','José','Felipe']
let [Luis,Marcos,Jose,Felipe] = nomes
console.log(Felipe)