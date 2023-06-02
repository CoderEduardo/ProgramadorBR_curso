let tela = document.getElementById("tela")
let context = tela.getContext("2d")

context.beginPath()     //Serve para dizer que um desenho está começando
context.lineWidth = 5
context.moveTo(10,10)
context.lineTo(200,200)
context.stroke()

context.beginPath()
context.lineWidth = 10
context.moveTo(10,50)
context.lineTo(300,300)
context.lineTo(200,300)
context.closePath()             //Fecha o desenho retornando a cordenada no moveTo()
context.fillStyle = "blue"
context.strokeStyle = "green"
context.stroke()
context.fill()