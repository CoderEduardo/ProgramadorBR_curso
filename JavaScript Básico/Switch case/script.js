var nota1 = 8
var nota2 = 1

var media = (nota1 + nota2) / 2

var conceito = ""

if (media >= 8) {
    conceito = "Ótimo"
} else if (media >= 6.5) {
    conceito = "Bom"
} else {
    conceito = "Regular"
}

switch (conceito) {

    case "Ótimo":
        console.log("Parabéns, você é um Ótimo aluno")
        break
    case "Bom":
        console.log("Você é um aluno bom")
        break
    case "Regular":
        console.log("Estude mais, você é um aluno regular")
        break
    default:
        console.log("Aconteceu algum erro")
        break
}

/*Switch case serve para criarmos condições para compararmos coisas especificas*/