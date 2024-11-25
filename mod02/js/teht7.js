let heitot = []
let sivut = +prompt("Syötä sivujen määrä: ")

function noppaile() {
    let heitto = 1 + Math.floor(Math.random() * sivut)
    heitot.push(heitto)
    return heitto
}

while (heitot.includes(sivut) === false) {
    noppaile()
}

document.querySelector('#tulostusAlue').innerHTML += "Heitetään noppaa kunnos heitetään maksimi."

const listContainer = document.querySelector("ul");

let listItems;

for (let i = 0; i < heitot.length; i++) {
    let displayListItems = document.createElement('li');
    listItems = heitot[i];
    displayListItems.innerHTML = listItems;

    listContainer.append(displayListItems);
}
