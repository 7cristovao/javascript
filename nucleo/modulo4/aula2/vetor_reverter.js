 let teste = 0
let vetorTemp = [20,23,30,18,25]

function adicionaTemp(temp){
    //vetorTemp[0] = temp // incorreto
    //vetorTemp.push(temp)
    const proximaPosicao = vetorTemp.length
    vetorTemp[proximaPosicao] = temp
}

//adicionaTemp(50)
//adicionaTemp(28)

console.log(vetorTemp.length)
console.log(vetorTemp)

function reverter(){
    let reverso = []
    for(let i = vetorTemp.length-1; i>=0; i--){
        reverso.push(vetorTemp[i])
    } 
    return reverso
}
console.log(reverter())


reverter()