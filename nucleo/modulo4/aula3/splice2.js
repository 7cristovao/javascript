let vetor = [1,2,3,4,5]

function incluirNaPosicao(valor,vetor,posicao){
    let vetorResposta = []

    for(let i=0;i < posicao;i++){
        vetorResposta[vetorResposta.length] = vetor[i]
    }
    vetorResposta[posicao] = valor
    for(let i =posicao;i<vetor.length;i++){
        vetorResposta[vetorResposta.length] = vetor[i]
    }
    return vetorResposta
}

vetor = incluirNaPosicao(55,vetor,2)
console.log(vetor) 