let carregamento = document.getElementById("carregando")
let btn = document.getElementById("btn")

function carregar() {
    carregamento.style.transition = "width 2s"
    carregamento.style.width = "500px"
}

btn.addEventListener("click", carregar)