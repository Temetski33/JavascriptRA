const tulostus =
    document.querySelector('#tulostusAlue')

let luvut = []
let testi = 123

while (testi !== 0) {
    let arvo =
        +prompt("Anna kokonaisluku: ")
    testi = arvo
    if (arvo !== 0) {
        luvut.push(arvo)
    }
}

luvut.sort((a, b) => b - a)


tulostus.innerHTML += "Tulostetaan luvut käänteisessä suuruusjärjestyksessä konsoliin."

for(let arvo of luvut) {
    console.log(`${arvo}`)
}
