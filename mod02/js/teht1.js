const tulostus =
    document.querySelector('#tulostusAlue')

let luvut = []

for (let i = 0; i<5; i++) {
    let arvo =
        +prompt("Anna kokonaisluku: ")
    luvut.push(arvo)
}


tulostus.innerHTML += "Tulostetaan luvut käänteisessä syöttöjärjestyksessä konsoliin."

for(i = luvut.length - 1; i >= 0; i--) {
    let arvo = luvut[i]
    console.log(`${arvo}`)
}
