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

inserirUsuarios("Ana").then(listarUsuarios).catch((error) => {
    console.log(error)
})  