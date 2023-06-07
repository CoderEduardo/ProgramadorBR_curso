let usuarios = ["Igor","Luis","José","Marta"]

function listarUsuarios(){
   console.log(usuarios)
}

function inserirUsuarios(nome){

    let promise = new Promise (function(resolve,reject){
        setTimeout(() => {
            usuarios.push(nome)

            let error = false

            if(!error){
                resolve()
            }else{
                reject("Erro de qualquer coisa")
            }

        },1000)
    })

    return promise

}

/*O Async Await facilita a nossa vida na hora de executar a função*/
/*Uma função Async Await força com que a função fique esperando tudo nela ser concluido, para ai sim ela ser executada*/

async function executar(){
    await inserirUsuarios("Ana")
    listarUsuarios()
}

executar()