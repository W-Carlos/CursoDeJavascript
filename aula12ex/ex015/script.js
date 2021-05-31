function verificar() {
   var data = new Date()
   var ano = data.getFullYear()//Vai pegar o ano com 4 digitos.
   var fano = document.getElementById('txtano')
   var res = document.getElementById('res')//ou document.querySelector('div#res')
   if (fano.value.length == 0 || fano.value > ano){
       //Validação de dados.
       alert('[ERRO] Verifique os dados e tente novamente!')
   }else {
       var fsex = document.getElementsByName('radsex')
       var idade = ano - Number(fano.value)
       //res.innerHTML = `Idade calculada: ${idade} anos.`
       var genero = ''
       var img = document.createElement('img') //Cria um elemento html.
       img.setAttribute('id', 'foto') // Cria um id='foto'
       if (fsex[0].checked) {
           genero = 'Homem'
           if (idade >= 0 && idade < 10) {
               //Criança
               img.setAttribute('src', 'menino.png')
           } else if (idade < 21) {
               //adolescente
               img.setAttribute('src', 'homem-jovem.png')
           } else if (idade < 50) {
               //Adulto
               img.setAttribute('src', 'homem-adulto.png')
           } else {
               //Idoso
               img.setAttribute('src', 'idoso.png')
           }
       } else if (fsex[1].checked) {
           genero = 'Mulher'
           if (idade >= 0 && idade < 10) {
               //Criança
               img.setAttribute('src', 'menina.png')
           } else if (idade < 21) {
               //Adolescente
               img.setAttribute('src', 'mulher-jovem.png')
           } else if (idade < 50) {
               //Adulto
               img.setAttribute('src', 'mulher-adulta.png')
           } else {
               //Idoso
               img.setAttribute('src', 'idosa.png')
           }
       }
       res.style.textAlign = 'center'//centraliza com javascript.
       res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
       res.appendChild(img)
   }
}