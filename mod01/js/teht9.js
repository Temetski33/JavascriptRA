'use strict';

const tulostus =
    document.querySelector('#tulostusAlue')

let onAlku = true

let luku =
        +prompt("Syötä luku: ")

let testauksenLoppu = luku / 2 + 1
testauksenLoppu = Math.round(testauksenLoppu)

for (let i = 2; i<testauksenLoppu; i++) {
    if (luku % i === 0) {
        onAlku = false
    }

}

if (luku < 2) {
    onAlku = false
}

if (onAlku) {
    tulostus.innerHTML += `Luku ${luku} on alkuluku.`
}

if (!onAlku) {
    tulostus.innerHTML += `Luku ${luku} ei ole alkuluku.`
}





