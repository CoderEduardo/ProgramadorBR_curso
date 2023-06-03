//Usamos o seletor de classes, pois classes podem ficar em mais de um elemento
let teste = document.getElementsByClassName("teste")

//percorremos o Array retornado com o in, e mostramos ele na tela
function mudar(){
    for(let i in teste){
        teste[i].style.backgroundColor = "red"
    }
}