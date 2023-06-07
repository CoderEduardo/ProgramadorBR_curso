/*Callback é uma função que é executada somente quando algum evento acontece, ou quando um código chega o estado desejado.
Usamos callback quando queremos garantir que uma função não seja executada antes de outra
*/

let usuarios = ["Igor","Luis","José","Marta"]

function listarUsuarios(){
   console.log(usuarios)
}

function inserirUsuarios(nome, callback){
    setTimeout(() => {
        usuarios.push(nome)
        callback()
    },1000)
}

/*Passamos por parâmetro a função que queremos executar depois*/
inserirUsuarios("Ana",listarUsuarios)

/*Nesse exemplo, o js só vai executar o listaUsuarios depois do usuarios.push(nome)*/