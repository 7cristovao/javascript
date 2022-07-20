const vItem = ["banana", "laranja", "limao", "pera"]

const vPreco = [6, 5, 7, 10]

const elemTabelaItem = document.getElementById("tabelaItem")

let indice = 0

while (indice <= 3){
    const iItem = vItem[indice]
    const iPreco = vPreco[indice]
    elemTabelaItem.innerHTML += 
    "<tr>" + "<td>" + iItem + "</td>" + "<td>" + iPreco + "</td>" + "</tr>"
    indice++
}