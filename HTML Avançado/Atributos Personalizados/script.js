/*9let image = document.getElementById("image")

//Uma das formas de mudar um atributo
image.addEventListener("click",function(){
    image.src = "imagens/dislike.svg"
})

image.addEventListener("click",function(){
    image.setAttribute("src","imagens/dislike.svg")
})*/

//Conseguimos criar várias coisas usando o settAttribute, como listas do tamanho desejado 

let lista = document.getElementById("lista")

//depois de colocarmos o data- antes do nome no html, podemos acessar o atributo com .dataset
let num = parseInt(lista.dataset.num)

let conteudo = ""

for(var i = 0; i < num;i++){
    conteudo += "<li>" + i + "</li>" 
}

lista.innerHTML = conteudo

//O sinal de += é muito importante, pois ele está pegando o valor previo e mostrando ele na tela com a soma do atual
