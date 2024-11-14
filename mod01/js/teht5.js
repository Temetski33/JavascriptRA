'use strict';

const tulostus =
    document.querySelector('#tulostusAlue')

let vuosi = prompt("Kerro nimesi: ")

if ( (vuosi % 400 == 0) || (vuosi % 4 == 0 && vuosi % 100 != 0) ) {
        tulostus.innerHTML +=
            `Vuosi ${vuosi} on karkausvuosi. <br>`
    }

else {
        tulostus.innerHTML +=
            `Vuosi ${vuosi} ei ole karkausvuosi. <br>`
    }