'use strict';

const tulostus =
    document.querySelector('#tulostusAlue')

let valinta = confirm("Lasketaankon neliöjuuri?")

if (valinta === false) {
        tulostus.innerHTML +=
            `Neliöjuurta ei laskettu. <br>`
    }

else {
    let luku = prompt("Syötä luku: ")

if (luku >= 0) {
        let juuri = Math.sqrt(luku)
        tulostus.innerHTML +=
            `Luvun ${luku} neliöjuuri on ${juuri}. <br>`
    }

else {
        tulostus.innerHTML +=
            `Negatiivisen luvun neliöjuuri ei ole määritelty. <br>`
    }
}

