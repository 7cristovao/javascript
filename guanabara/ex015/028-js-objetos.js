let objetos = {
	nome: 'José', 
	idade: 27,
	peso: 85.4,
	engordar(p){
		console.log('Engordou')
		this.peso += p
	}
}
//console.log(objetos)
//console.log(objetos.nome)
objetos.engordar(2) //objeto.metodo()
console.log(`${objetos.nome} pesa ${objetos.peso} kg`)