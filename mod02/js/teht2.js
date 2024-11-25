const tulostus =
    document.querySelector('#tulostusAlue')

let toistot = +prompt("Anna osallistujien määrä: ")
let nimet = []

for (let i = 0; i<toistot; i++) {
    let arvo =
        prompt("Syötä osallistujan nimi: ")
    nimet.push(arvo)
}

nimet.sort();

tulostus.innerHTML += `Tulostetaan nimet aakkosjärjestyksessä: <br>`

const listContainer = document.querySelector("ol");

let listItems;

for (let i = 0; i < nimet.length; i++) {
    let displayListItems = document.createElement('li');
    listItems = nimet[i];
    displayListItems.innerHTML = listItems;

    listContainer.append(displayListItems);
}
