const elements = [];

function juntarTextos(){
    let ent1 = document.getElementById("entrada1").value
    let ent2 = document.getElementById("entrada2").value
    let ent3 = document.getElementById("entrada3").value

    elements.push(ent1,ent2,ent3)

    console.log(elements.join())
    console.log(elements.join(''))
    console.log(elements.join('-'))
}

