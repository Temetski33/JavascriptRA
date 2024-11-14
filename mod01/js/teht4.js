'use strict';

// arvotaan tuvan numero väliltä 1 - 4
let tuvanNro = 1 + Math.floor(Math.random() * 4)
let tuvanNimi = "placeholder"

const tulostus =
    document.querySelector('#tulostusAlue')

if (tuvanNro === 1) {
    tuvanNimi = "Rohkelikko"
}
if (tuvanNro === 2) {
    tuvanNimi = "Luihunen"
}
if (tuvanNro === 3) {
    tuvanNimi = "Puuskupuh"
}

if (tuvanNro === 4) {
    tuvanNimi = "Korpinkynsi"
}

let nimi = prompt("Kerro nimesi: ")

tulostus.innerHTML += `${nimi}, sinun tupasi on ${tuvanNimi}.`

