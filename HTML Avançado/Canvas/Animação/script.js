let tela = document.getElementById("tela")
let context = tela.getContext("2d")

let circulo = {
    x: 250,
    y: 250,
    raio: 100,
    inicio: 0,
    fim: 2 * Math.PI
}

function desenharCirculo(c) {

    context.beginPath()
    context.rect(0, 0, 500, 500)
    context.fillStyle = "beige"
    context.fill()


    context.beginPath()
    context.strokeStyle = "red"
    context.fillStyle = "green"
    context.lineWidth = 5
    context.arc(c.x, c.y, c.raio, c.inicio, c.fim)
    context.stroke()
    context.fill()
}

setInterval(function () {
    /*if(circulo.fim <= 2 * Math.PI){
        circulo.fim += 0.3
        circulo.x += 20
    }*/
    circulo.x += 30
    if (circulo.x > 600) {
        circulo.x = 0
    }
    
    desenharCirculo(circulo)

}, 30)



