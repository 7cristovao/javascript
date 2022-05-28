var clicar
function clicar(){
    var c = prompt('Digite uma temperatura em Celsius: ')
    c = parseFloat(c)
    clique.innerHTML = `<h2> A temperatura ${c}º celsius corresponde a: </h2>`+
    '<br>'+
    `${(c*1.8)+32} ºF farenheit`+
    '<br>'+
    `${parseFloat(c+273.15).toFixed(2)} ºK Kelvin`
}