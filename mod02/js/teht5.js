const tulostus =
    document.querySelector('#tulostusAlue')

let luvut = []
let testi = 123

while (testi !== 0) {
    let arvo =
        +prompt("Anna kokonaisluku: ")
    if (luvut.includes(arvo) === true) {
        testi = 0
    }
    if (luvut.includes(arvo) === false) {
        luvut.push(arvo)
    }
}

luvut.sort((a, b) => a - b)


tulostus.innerHTML += "Tulostetaan luvut suuruusjärjestyksessä konsoliin."

for(let arvo of luvut) {
    console.log(`${arvo}`)
}
