'use strict';

const tulostus =
    document.querySelector('#tulostusAlue')

let nimi = prompt("Kerro nimesi: ")

tulostus.innerHTML += `Hello, ${nimi}!`