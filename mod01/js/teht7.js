'use strict';

const tulostus =
    document.querySelector('#tulostusAlue')

let summa = 0

let heitot =
        +prompt("Anna nopanheittojen määrä: ")

for (let i = 0; i<heitot; i++) {
    let heitto = 1 + Math.floor(Math.random() * 6)
    summa += heitto
}

tulostus.innerHTML += `Heitettyjen noppien tulosten summa on ${summa}.`
