let valores = [7, 2, 5, 10, 3]
let pos = valores.indexOf(10) //localiza
console.log(`${valores}`)
console.log(pos)

let posInexiste = valores.indexOf(11)
console.log(posInexiste)

//##########

let vet = [6,4,2,9,10]
let poz = vet.indexOf(10)
console.log(poz)

if(poz < 0){
	console.log('Não existe no vetor')
}else{
	console.log(`Está na posição ${poz}`)
}