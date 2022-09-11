//cria fx
//recebe valor e umapos vc tem q colok o valor na pos
//empurra valores pra caber dentro de um vet
let num = ["um","dois","tres","quatro"]

function x(rec){
    num.splice(2,0,"cinco")
}

x("cinco")

console.log(num)