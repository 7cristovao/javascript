function verificar(){
    const valueDoador = document.getElementById("inputDoador").value
    const spanRecebedor = document.getElementById("spanRecebedor")

    spanRecebedor.textContent = obtemRecebedor(valueDoador.toUpperCase())
}

function obtemRecebedor(doador){
    switch (doador) {
        case "A":
            return "A e AB"
            break;
        case "B":
            return "B e AB"
            break;
        case "AB":
            return "AB"
            break
        case "O":
            return "A, B, AB e O"
            break
        default:
            return "tipo inválido"
            break;
    }
}
/*
    if (doador == 'A'){
        return "a e ab"
    }else if(doador == 'B'){
        return "b e ab"
    }else if(doador == 'AB'){
        return "ab"
    }else if(doador == 'O'){
        return "a, b, ab e o"
    }else{
        return "tipo inválido"
    }
}
*/
