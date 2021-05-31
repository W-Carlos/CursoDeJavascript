function parimpar(n) {
    if(n%2 == 0) {
        return 'O número é Par!'
    } else {
        return 'O número é Impar!'
    }
}

//chamada da função
let res = parimpar(5)//o número dentro dos parenteses é o parâmetro.
console.log(res)