//A propriedade Document vai conter todo o nosso HTML, é por ele que vamos poder modificar o html com Js

let p1 = document.getElementById("p1")  //Acessando um elemento do DOM através do id
p1.innerText = "Mudando o conteúdo desse parágrafo" //Uma forma de mudar o conteúdo do parágrafo
p1.className = ""  //Mudando o nome da classe, não podemos mudar o nome da classe quando estamos usando o document.getElementsByClassName
p1.style.color = "yellow" //Mudando a cor de um elemento usando o style
p1.setAttribute = ("novoAtt","Qualquer coisa")  //Criando um atributo e colocando valor nele

let paragrafo = document.getElementsByClassName("paragrafo") //Acessendo um elemento do DOM através da sua classe

let tagH1 = document.getElementsByTagName("h1") //Acessando um elemento do DOM através da sua tag

