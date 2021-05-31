//Objetos em JavaScript

let amigo = {
    nome: 'José', 
    sexo: 'M', 
    peso: 85.5,
    engordar(p=0){
        console.log('Engordar')
        this.peso += p
    }}

amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.peso}Kg`)