function tabuada() {
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')

    if (num.value.length == 0) {
        alert('Digite um número!')
    } else {
        //convertendo para número
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = ''
        while (c <= 10) {
            let item = document.createElement('option')// cria um elemento option no html.
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab{c}`
            tab.appendChild(item)
            c++
        }
    }
    
}