function contar() {
    let inicio = document.getElementById('txt-inicio')
    let fim = document.getElementById('txt-fim')
    let passo = document.getElementById('txt-passo')
    let res = document.getElementById('res')

    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        //Tratamento de erros. Verificar se os inputs estão vazios.
        res.innerHTML = 'Impossivel contar!'
        alert('[ERRO] Faltam dados!')        
    } else {
        res.innerHTML = 'Contando: <br>'
        //convertendo o valor das variaveis em números
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0) {
            alert('Passo inváido! Considerando passo 1')
            p = 1
        }
        if (i < f) {
                //Contagem crescente
                for(let c = i; c <= f; c += p){
                res.innerHTML += ` ${c} \u{1F449}` 
            }
            
        } else {
            //contagem regressiva
            for(let c = i; c >= f; c -= p) {
                res.innerHTML += ` ${c} \u{1F449}`
            }          
        }      
        res.innerHTML += `\u{1F3C1}`
    }
   
}