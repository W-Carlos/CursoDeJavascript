var atual = new Date()
var horas = atual.getHours()
console.log(`Agora são exatamente ${horas} horas!`)
if (horas < 12) {
    console.log('Bom Dia!')
} else if (horas <= 18) {
    console.log('Boa Tarde!')
} else {
    console.log('Boa noite')
}