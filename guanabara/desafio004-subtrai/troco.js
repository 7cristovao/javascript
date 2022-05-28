var clicar
function clicar(){
    var produto = prompt('Que produto você está comprando?')
    var valorProduto = prompt(`Quanto custa este ${produto} que você está comprando?`)
    valorProduto = parseFloat(valorProduto)
    var valorPago = prompt(`Qual foi o valor que você deu para pagar o ${produto}`)
    valorPago = parseFloat(valorPago)
    alert(`Você comprou um ${produto} que custou ${valorProduto}.
    Deu R$ ${valorPago} em dinheiro e vai receber ${valorPago - valorProduto} de troco. 
    Volte Sempre!`)
}