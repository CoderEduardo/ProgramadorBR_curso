let tela = document.getElementById("tela")
let context = tela.getContext("2d")

/*//Criando um Retângulo preenchido
context.fillStyle = "blue"          //Define a cor do Retângulo
context.fillRect(10,10,100,200)     //O primeiro parâmetro define onde o x começa, o segundo onde o y começa, e o terceiro e quarto são largura e altura 
*/

/*//Criando um Retângulo com bordar, mas com o preenchimento vazio
context.strokeStyle = "red"          //Define a cor da borda do Retângulo
context.strokeRect(10,10,100,200)   //O primeiro parâmetro define onde o x começa, o segundo onde o y começa, e o terceiro e quarto são largura e altura
*/

//Criando um Retângul com bordar e o meio preenchido

context.rect(10,10,100,200)         //Passando as cordenadas e o tamanho do Retângulo
context.fillStyle = "blue"          //Define a cor do preenchimento
context.lineWidth = 5               //Define a espessura da borda
context.strokeStyle = "red"         //Define a cor da borda

context.fill()                      //Executa a função que renderiza o preenchimento
context.stroke()                    //Executa a função que renderiza a borda