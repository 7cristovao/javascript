const vetorTemp = [18, 20, 25, 30, 28]

function reverterVetor(paramVetor){
    let vetorResposta = []
    for (let i = paramVetor.length -1; i >= 0; i--){
        vetorResposta.push(paramVetor[i])
    } 
    return vetorResposta
}

console.log(reverterVetor(vetorTemp))

