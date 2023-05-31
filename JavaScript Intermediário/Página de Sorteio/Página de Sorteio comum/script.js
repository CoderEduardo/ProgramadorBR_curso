function gerarNumero() {
    let min = document.getElementById("min").value
    let max = document.getElementById("max").value

    let sorteio = Math.round(Math.random() * (max - min) + min)
    let resultado = document.getElementById("resultado")
    resultado.innerText = sorteio
}