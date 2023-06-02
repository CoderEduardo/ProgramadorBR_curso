let tela = document.getElementById("tela")

let context = tela.getContext("2d")                 //.getContext("2d") serve para indicar que o contexto do desenho é em 2d
context.moveTo(0,0)                                 //.moveTo() indica onde a linha vai começar a ser traçada
context.lineTo(250,250)                             //.lineTo() indica para onde a linha vai ser desenhada
context.lineTo(500,0)
context.lineWidth = 5                               //.lineWidth diz o quanto de espessura a linha vai ter
context.strokeStyle = "blue"                        //.strokeStyle diz qual vai ser a cor da linha
context.stroke()                                    //.stroke serve para imprimir a linha na tela