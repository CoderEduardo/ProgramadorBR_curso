function speakGeneric(){
    console.log(this.sound)
}

let dog = {
    sound:"Au Au Au",
    speak: speakGeneric
}

let cat = {
    sound:"Miau Miau Miau",
    speak: speakGeneric
}

/*O this pega o contexto do objeto e o coloca no lugar dele, ou seja, dentro do objeto cat, o this é = cat, então quando passamos this.sound, estamos 
na verdade passando cat.sound.
A mesma coisa se aplica no objeto dog*/

dog.speak()
cat.speak()

let bindFunction = speakGeneric.bind(cat)

/*Quando eu utilizo o bind em uma função, o contexto dela passa a ser o objeto que eu passei por parâmetro*/

bindFunction()