let heitot = []

function noppaile() {
    let heitto = 1 + Math.floor(Math.random() * 6)
    heitot.push(heitto)
    return heitto
}

while (heitot.includes(6) === false) {
    noppaile()
}

document.querySelector('#tulostusAlue').innerHTML += "Heitetään noppaa kunnos heitetään 6."

const listContainer = document.querySelector("ul");

let listItems;

for (let i = 0; i < heitot.length; i++) {
    let displayListItems = document.createElement('li');
    listItems = heitot[i];
    displayListItems.innerHTML = listItems;

    listContainer.append(displayListItems);
}
