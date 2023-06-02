let jogador = document.getElementById("quadrado")

let xInicial = 325
let yInicial = 350

function moverJogador(x, y) {
    let posX = x + "px"
    let posY = y + "px"

    jogador.style.top = posX
    jogador.style.left = posY
}

function esquerda() {
    moverJogador(xInicial, yInicial -= 20)
}

function direita() {
    moverJogador(xInicial, yInicial += 20)
}

function cima() {
    moverJogador(xInicial -= 20, yInicial)
}

function baixo() {
    moverJogador(xInicial += 20, yInicial)
}

//Criando uma forma de mexer com as teclas do teclado

let teste = document.getElementById("tela")
teste.addEventListener("keydown", moverComTeclado)

let tecla = ""

function moverComTeclado() {
    tecla = event.keyCode
    if (tecla == 38) {
        moverJogador(xInicial -= 20, yInicial)
    }
    else if (tecla == 39) {
        moverJogador(xInicial, yInicial += 20)
    }
    else if (tecla == 40) {
        moverJogador(xInicial += 20, yInicial)
    }
    else if (tecla == 37) {
        moverJogador(xInicial, yInicial -= 20)
    }
}












