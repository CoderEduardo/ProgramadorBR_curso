try{
    console.log(nome)
} catch(erro){
    console.log(`Houve um ${erro}`)
}

console.log("Boa noite")

/*Podemos usar também o finally depois do cacth, que seria utilizado para executar alguma coisa independente se deu erro ou não*/

/*Podemos fazer uma verificação no nome, com o if(nome==""){throw"erro"}, se o if for colocado antes do try ele aborta a aplicação, e se ele for colocado
deentro do try, ele simplesmente notifica o erro*/