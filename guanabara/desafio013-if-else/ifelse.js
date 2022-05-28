function clicar(){
    var nome = prompt('Qual o nome do aluno?')
    var n1 = prompt('Qual a primeira nota?')
    n1 = parseFloat(n1)
    var n2 = prompt('Qual a segunda nota?')
    n2 = parseFloat(n2)
    var media = (n1+n2)/2
    media = parseFloat(media)
    var status
    if (media >= 6){
        status = 'Aprovado'
    }
    else if (media >= 3 && media <6){
        status = 'Recuperação'
    }
    else{
        status = 'Reprovado'
    }

    clique.innerHTML = `${status}. A média de ${nome} foi de ${media}`
}