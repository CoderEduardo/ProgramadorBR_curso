let pessoas = ["Marcos", "Marcio", "Julio", "Ana", "Dani", "Pablo", "Carol", "Neymar","Luis"]

function sortear() {
    let np = pessoas.length                                //length retorna um índice do Array
    let sorteio = Math.floor(Math.random() * np)
    let resultado = document.getElementById("resultado")
    resultado.innerText = pessoas[sorteio]

}