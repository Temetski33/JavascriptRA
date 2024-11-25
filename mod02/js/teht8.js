const tulostus =
    document.querySelector('#tulostusAlue')

let names = ["Jonney","JeeJay","Marky","Johanson"];

function concat(text) {
    let combination = ""
    for(let name of text) {
        combination += name
    }
    return combination;
}


kombinaatio = concat(names)
tulostus.innerHTML += `Tulostetaan kombinaatio: <br> <br>`
tulostus.innerHTML += `${kombinaatio}`