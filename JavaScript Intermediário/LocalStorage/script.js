//localStorage.setItem("nome","Luis")

//let mostrar = localStorage.getItem("nome")
//console.log(mostrar)

//localStorage.removeItem("nome")

onload = function(){
    let valor = this.localStorage.getItem("valor")
    let h1 = document.getElementById("titulo")
    h1.innerText = valor 
}

function atualizar(elemento){

    let valor = elemento.value

    let h1 = document.getElementById("titulo")
    h1.innerText = valor

    localStorage.setItem("valor",valor)

}


