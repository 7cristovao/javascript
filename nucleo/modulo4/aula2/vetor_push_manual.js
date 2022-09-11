let teste = 0
let vetorTemp = [20,23,30,18,25]

function adicionaTemp(temp){
    //vetorTemp[0] = temp // incorreto
    //vetorTemp.push(temp)
    const proximaPosicao = vetorTemp.length
    vetorTemp[proximaPosicao] = temp
}

adicionaTemp(50)
adicionaTemp(28)

console.log(vetorTemp.length)

console.log(vetorTemp)

//------------------------------------------
/*for(let i = 0;i <= vetorTemp.length;i++){
    console.log(vetorTemp[i])
}*/

function estaNoVetor(valor){  //similar ao metodo includes
    for(let i=0;i<vetorTemp.length;i++)
    {
        if(valor == vetorTemp[i]){
            return true
        }
    }
    return false
}

console.log(estaNoVetor(30)) // true
console.log(estaNoVetor(60)) // false