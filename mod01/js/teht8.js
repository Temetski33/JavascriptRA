// teht 8 js koodi
// itselle muistiin sivu: users.metropolia.fi/~teemuvl

'use strict';

// kysytaan kayttajalta tarvittavat alkutiedot

const alku = +prompt("Anna aloitusvuosi: ")
const loppu = +prompt("Anna loppuvuosi: ")

// kaydaan kaikki vuodet lapi yksitellen alkuvuodesta loppuvuoteen asti
for (let vuosi = alku; vuosi <= loppu; vuosi++) {
    // onko vuosi karkausvuosi
    // vuosi on jaollinen 400
    //TAI vuosi on jaollinen 4 muttei 100
    if ( (vuosi % 400 == 0) || (vuosi % 4 == 0 && vuosi % 100 != 0) ) {
        document.querySelector('#tulostusAlue').innerHTML +=
            `Vuosi ${vuosi} on karkausvuosi. <br>`
    }

}