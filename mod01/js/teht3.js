'use strict';

const tulostus =
    document.querySelector('#tulostusAlue')

// luodaan tyhjä taulukko/lista lukuja varten
let luvut = []
let lkm = +3

// kysytään käyttäjältä arvot ja lisätään ne listaan
for (let i = 0; i<lkm; i++) {
    let arvo =
        +prompt("Anna kokonaisluku: ")
    luvut.push(arvo)
}

let summa = +(luvut[0] + luvut[1] + luvut[2])
let tulo = +(luvut[0] * luvut[1] * luvut[2])
let keskiarvo = +(summa / lkm)

tulostus.innerHTML += `Lukujesi summa: ${summa} <br>
    Lukujesi tulo: ${tulo} <br>
    Lukujesi keskiarvo: ${keskiarvo}`

