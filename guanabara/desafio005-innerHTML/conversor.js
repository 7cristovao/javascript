var clicar
function clicar(){
    var metros = prompt('Digite uma distância em metros: ')
    metros = parseFloat(metros)
    clique.innerHTML = `<h2> A distância de ${metros} metros corresponde a: </h2>`+
    '<br>'+
    `${metros*0.001} quilômetros (Km)`+
    '<br>'+
    `${metros*0.01} hectômetros (Hm)`+
    '<br>'+
    `${metros*0.1} decâmetros (Dam)`+
    '<br>'+
    `${metros*10} decímetros(dm)`+
    '<br>'+
    `${metros*100} centímetros (cm)`+
    '<br>'+
    `${metros*1000} milimetros (mm)`
}