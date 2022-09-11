let v = [1,2,3,4,5]

function incluirNaPosicao(valor,vetor,posicao){
    for(let i=vetor.length;i>posicao;i--){
        vetor[i] = vetor[i-1]
    }
    vetor[posicao] = valor
    return vetor
}

v = incluirNaPosicao(55,v,2)
console.log(v)