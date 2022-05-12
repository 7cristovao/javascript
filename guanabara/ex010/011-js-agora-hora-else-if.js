// bom dia, tarde, noite
//let hora = 19
var dataAtual = new Date() // agora()
var hora = dataAtual.getHours()
//console.log(hora)
console.log(
	`Agora são exatamente ${hora} horas`
	)
if(hora >= 0 && hora <=12){
	console.log('Bom dia!')
}else if(hora >= 13 && hora <= 18){
	console.log('Boa tarde!')
}else{
	console.log('Boa noite!')
}