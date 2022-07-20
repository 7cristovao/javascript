let listaFrutas = 

function calculaTotal(){
    let condicao = true
    let indice = 0
    let total = 0
    while(condicao){
        const fruta = listaFrutas[indice]
        total = total + fruta.preco
        indice = indice + 1
        if (indice >= listaFrutas.length){
            condicao = false
        }
    }
    return total
}

function adicionaListaFrutas(nomeFruta, precoFruta){
    
}
