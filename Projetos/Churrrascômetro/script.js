/*Lógica e dados das contas
Carne - 400g por pessoa + de 6 horas - 650g
Cerveja - 1200ml por pessoa + de 6 horas - 2000ml
Refrigerante/água - 1000ml por pessoa + 6 horas - 1500ml 
Crianças valem por 0.5 e não tomam cerveja*/

function calcular(){
    let adultos = document.getElementById("adultos").value
    let criancas = document.getElementById("criancas").value
    let hora = document.getElementById("hora").value

    let carne = 400
    let cerveja = 1200
    let refrigerante = 1000

    if(hora>=6){
        carne = 650
        cerveja = 2000
        refrigerante = 1500
    }

    let resultadoCarne = ((adultos * carne) + ((criancas * carne) / 2)) / 1000
    let resultadoCerveja = (adultos * cerveja) / 1000
    let resultadoRefrigerante = ((adultos * refrigerante) + ((criancas * refrigerante) / 2)) / 1000

    let p1 = document.getElementById("carne-resultado")
    let p2 = document.getElementById("bebidas-resultado")
    let p3 = document.getElementById("refrigerante-resultado")

    p1.innerText = resultadoCarne + " Kg de carnes"
    p2.innerText = resultadoCerveja + " L de cerveja"
    p3.innerText = resultadoRefrigerante + " L de refrigerante/água"

}