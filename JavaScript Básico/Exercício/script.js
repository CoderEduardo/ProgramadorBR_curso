//Nome do aluno - nota1 - nota2 - media - aprovado 
/*
var nome = prompt("Digite o seu nome:")
var nota1 = parseFloat(prompt("Digite a sua primeira nota " + nome + ":"))
var nota2 = parseFloat(prompt("Digite a sua segunda nota " + nome + ":"))

var media = () => {
    return (nota1 + nota2) / 2
}

media = media()

if (media >= 7) {
    document.write("Parabens, você foi aprovado com a media: " + media)
} else if (media >= 5) {
    document.write("Você foi aprovado com a media: " + media)
} else {
    document.write("Você foi reprovado, pois ficou com a media de " + media)
}

*/

//Segundo Projeto, criar Arrays com três índices e calcular a nota de três alunos e mostrar na tela as notas e a média e a situação de aprovado ou não

var nomes = ["José", "Marta", "Gomes"]
var notas1 = [7, 8, 9]
var notas2 = [2, 5, 10]

function calcMedia(n1, n2) {
    return (n1 + n2) / 2
}

function passou(media) {
    if (media >= 7) {
        return "Aprovado"
    } else if (media >= 5) {
        return "em Recuperação"
    } else {
        return "Reprovado"
    }
}

for (var i in nomes) {

    var nome = nomes[i]
    var nota1 = notas1[i]
    var nota2 = notas2[i]
    var media = calcMedia(nota1, nota2)
    var estado = passou(media)

    console.log("O aluno " + nome + " tirou a nota " + nota1 + " na primeira prova, e na segunda prova tirou nota " + nota2 + " e ficou com a média de "
        + media + " e o aluno está: " + estado)
}
