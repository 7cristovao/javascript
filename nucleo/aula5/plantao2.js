//pegar info dos inputs
//guardar
//pegar o guardado
//jogar na tabela
let listaDeCompras = [] // cria uma variavel do tipo lista vazia //3

function clickAdicionaFruta(){
    const vFruta = document.getElementById("inputFruta").value //1
    const vPreco = parseFloat(document.getElementById("inputPreco").value) //2
 
    itemFruta = {fruta:vFruta,preco:vPreco} //4
    listaDeCompras.push(itemFruta) //5
    // ou    listaDeCompras.push({fruta:vFruta,preco:vPreco})

    atualizaTabela()
    somaTotal()
    escrevaLinhaTabela(itemFruta)
}

function atualizaTabela(){ //6
    

    const tabela = document.getElementById("tabelaFruta") //penultimo passo 
    tabela.innerHTML = "" //penultimo passo limpar

    const tamanhoDaLista = listaDeCompras.length
    for(let i = 0; i < tamanhoDaLista; i++/* eu percorrer os itens da listaDeCompras */){
        let itemNomeFruta = listaDeCompras[i]["fruta"] // ultimo passo
        let itemPreco = listaDeCompras[i].preco
        tabela.innerHTML += escrevaLinhaTabela(listaDeCompras[i])
        //tabela.innerHTML += "<tr><td>" + itemNomeFruta + "</td><td>" + itemPreco + "</td></tr>" //7
    }
}
function escrevaLinhaTabela(itemFruta){
    return (
        "<tr>" + 
        escrevaCelulaTabela(itemFruta.fruta)+
        escrevaCelulaTabela(itemFruta.preco) + "</tr>"
    )
}
/*

const tamanhoDaLista = listaDeFruta.length
let i = 0
while ...
tabela.innerHTML ="xablau" 

*/

function somaTotal(){
    const tamanhoDaLista = listaDeCompras.length
    const elementoTotal = document.getElementById("tdTotal")
    
    let total = 0
    for (let i = 0; i < tamanhoDaLista; i++){
        const itemLista = listaDeCompras[i]
        total = total + itemLista.preco
    }  

    elementoTotal.textContent = total
    tdTotal.innerHTML = `Total: ${total}`
}



function escrevaCelulaTabela(valor){
    return "<td>" + valor + "</td>"
}