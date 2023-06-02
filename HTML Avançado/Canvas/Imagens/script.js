let tela = document.getElementById("tela")
let context = tela.getContext("2d")

/*Para criar uma imagem com Canvas diretamente do js, precisamos criar um objeto imagem, e depois passar o src dela, e logo em seguida fazer com que 
a imagem seja mostrada com o onload, e passando uma função que coloca a imagem na tela*/

let img = new Image()
img.src = "https://media.forgecdn.net/avatars/255/921/637203372490825773.png"

img.onload = desenharImagem

function desenharImagem(){
    context.drawImage(this,20,20, this.naturalWidth/2,this.naturalHeight / 2) //Para desenhar a imagem usamos o .drawImage(imagem, posiçãoX, posiçãoY)
}

//this.naturalWidth/2,this.naturalHeight / 2 pega o tamanho natural da imagem e divide por 2