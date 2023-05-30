function calcMedia(){
    return (this.notas[0] + this.notas[1]) / 2 //O this faz refência ao proprio objeto, nos permitindo usar a função em objetos diferentes
}

var aluno = {
    nome:"Luis",
    notas: [10,9],
    media : calcMedia
}

var aluno2 = {
    nome:"José",
    notas: [5,7],
    media : calcMedia
}

console.log(aluno.media())
console.log(aluno2.media())
