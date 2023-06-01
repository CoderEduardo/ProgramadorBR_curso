let video = document.getElementById("video")

function retroceder() {
    video.currentTime -= 15
}

function avancar() {
    video.currentTime += 15
}

function diminuir_vel() {
    video.playbackRate -= 0.5
}

function aumentar_vel() {
    video.playbackRate += 0.5
}

function iniciar() {
    video.play()
}

function parar() {
    video.pause()
    //video.currentTime = 0  Faz o vídeo voltar para o começo
}

let controle = document.getElementById("controle")
controle.style.visibility = "hidden"

function esconder() {
    let controle = document.getElementById("controle")
    controle.style.visibility = "hidden"
}

function mostrar() {
    controle.style.visibility = "visible"
}

let container = document.getElementById("container")
container.addEventListener("mouseover",mostrar)
container.addEventListener("mouseout",esconder)
