'use strict';

const tulostus =
    document.querySelector('#tulostusAlue')

let voitot = 0

let tavoite =
        +prompt("Anna tavote: ")

let heitot =
        +prompt("Anna nopanheittojen määrä: ")


for (let i = 0; i<10000; i++) {
    let summa = 0

    for (let i = 0; i<heitot; i++) {
        let heitto = 1 + Math.floor(Math.random() * 6)
        summa += heitto
    }
    if (summa === tavoite) {
        voitot += 1
    }
}

let mahdollisuus = voitot / 10000
mahdollisuus = mahdollisuus.toFixed(2)
mahdollisuus = mahdollisuus * 100

tulostus.innerHTML += `Mahdollisuus saada summa ${tavoite} heittämällä ${heitot} noppaa on ${mahdollisuus}%.`
