let audio = document.getElementById("audio")

function play() {
        audio.play()            //faz o audio iniciar
    }

function pause() {
    audio.pause()               //faz o audio pausar
}

function recomecar() {
    audio.currentTime = 0       //faz o audio voltar ao minuto 0
}

function avancar_15() {
    audio.currentTime += 15     //faz o audio avançar 15 segundos
}

function voltar_15() {
    audio.currentTime -= -15    //faz o audio voltar 15 segundos
}

function aumentar_vel() {
    audio.playbackRate += 0.5   //faz a velociadade do audio aumentar em 0.5
}

function diminuir_vel() {
    audio.playbackRate -= 0.5   //faz a velocidade do audio diminuir em 0.5
}

