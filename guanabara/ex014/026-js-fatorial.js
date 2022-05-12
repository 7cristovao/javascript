//5*4*3*2*1

function fatorial(n){ //fx recebe n
// e retorna fatorial desse numero
	let fat = 1 // fat recebe 1
 for(c = n;c > 1;c--){
 	//  (1)    (2)  (3)
 	// (1) contador comeca em n
 	// (2) enquanto contador maior que 1
 	// (3) contador perde 1
 	
 	// se passa 5 aqui no parametro ele
 	// vai perdendo 1 até chegar 1
 	fat *= c // fat = fat * c
 }
	return fat
}

console.log(fatorial(5))
