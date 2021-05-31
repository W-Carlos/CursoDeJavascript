var intervald = window.setInterval(() => {carregar()
        
},1000)

function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    var segundo = data.getSeconds()
    msg.innerHTML = `Agora são ${hora}:${minuto}:${segundo} horas.`

    if (hora >= 0 && hora < 12) {
        //BOM DIA!
        img.src = 'imagens/manha2.png'
        document.body.style.backgroundColor = '#e2cd9f'
    } else if (hora >= 12 && hora <= 18) {
        //BOA TARDE
        img.src = 'imagens/tarde.png'
        document.body.style.backgroundColor =  '#b9846f'
    } else {
        //BOA NOITE
        img.src = 'imagens/noite.png'
        document.body.style.backgroundColor =  '#515154'
    }
}



