let vetor = [18,20,25,30,28]

function incluirNaPrimeiraPosicao(valor,paramVetor){
    let vetorResposta = []
    vetorResposta.push(valor)
    for(
        let i = 0; //declarar variavel com o valor inicial
        i < paramVetor.length; //condicao de repeticao
        i++ //incremento da variavel
    ){
        vetorResposta[vetorResposta.length] = paramVetor[i]
                                        // nomeDoVETOR[posicao]
    }
    return vetorResposta
    
}

vetor = incluirNaPrimeiraPosicao(55,vetor) 

console.log(vetor)