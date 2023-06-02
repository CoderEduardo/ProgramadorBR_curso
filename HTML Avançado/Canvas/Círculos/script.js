let tela = document.getElementById("tela")
let context = tela.getContext("2d")

context.beginPath()
context.strokeStyle = "red"
context.fillStyle = "green"
context.lineWidth = 5
context.arc(250,250,100,0,2 * Math.PI) /*O primeiro parâmetro é a posição X do círculo, o segundo é a posição Y, o terceiro é o tamanho do Raio do Círculo
, o quarto é o começo do desenho da circunferência, e o último é o fim do desenho. Como 1/4 do círculo equivale a 1/4 de PI, multiplicamos PI por 2*/
context.stroke()
context.fill()