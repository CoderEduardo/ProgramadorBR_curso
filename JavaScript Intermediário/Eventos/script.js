/*function mudarH1(i){
    let h1 = document.getElementsByTagName("h1")[0]
    h1.innerText = i.value
}

function sumirH1(){
    let h1 = document.getElementsByTagName("h1")[0]
    h1.style.display = "none"                        //O display none retira o elemento da tela
}*/

function mouseOver(elemento) {
    elemento.style.backgroundColor = "red"
}          /*Passando um elemento por parametro e depois colocando o this como atributo da função conseguimos modificar qualquer elemento*/

function mouseOut(elemento){
    elemento.style.backgroundColor = "blue"
}