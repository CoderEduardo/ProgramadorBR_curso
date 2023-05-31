let t = document.getElementById("titulo")
t.addEventListener("click",mudarTexto) 
//t.click = mudarTexto Também conseguimos fazer dessa forma

function mudarTexto(){
    t.innerText = "O texto foi mudado"
}

