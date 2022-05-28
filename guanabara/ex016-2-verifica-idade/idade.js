//fano: formulário ano
function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente')
    }
    else
    {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        //res.innerHTML = `Idade calculada: ${idade}` //TESTAR AOS POUCOS
        var genero = ''
        var img = document.createElement('img')
        if (fsex[0].checked){
            genero = 'homem'
            if (idade >=0 && idade < 10){
                //criança
                img.setAttribute('src', 'foto-bebe-h.png')
            }else if (idade >=10 && idade < 21){
                //jovem
                img.setAttribute('src', 'foto-jovem-h.png')
            }else if (idade < 50){
                //adulto
                img.setAttribute('src', 'foto-adulto-h.png')
            }else{
                //idoso
                img.setAttribute('src', 'foto-idoso-h.png')
            }
        }
        else if (fsex[1].checked)
        {
            genero = 'mulher'
            if (idade >=0 && idade < 10){
                //criança
                img.setAttribute('src', 'foto-bebe-m.png')
            }else if (idade >=10 && idade < 21){
                //jovem
                img.setAttribute('src', 'foto-jovem-m.png')
            }else if (idade < 50){
                //adulto
                img.setAttribute('src', 'foto-adulto-m.png')
            }else{
                //idoso
                img.setAttribute('src', 'foto-idoso-m.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}