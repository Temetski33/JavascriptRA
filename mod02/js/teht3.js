const tulostus =
    document.querySelector('#tulostusAlue')

let toistot = 6
let nimet = []

for (let i = 0; i<toistot; i++) {
    let arvo =
        prompt("Syötä koiran nimi: ")
    nimet.push(arvo)
}

nimet.sort(function (a, b) {
    return a.toLowerCase().localeCompare(b.toLowerCase());
});

nimet.reverse()

tulostus.innerHTML += `Tulostetaan koirien nimet käänteisessä aakkosjärjestyksessä: <br>`

const listContainer = document.querySelector("ul");

let listItems;

for (let i = 0; i < nimet.length; i++) {
    let displayListItems = document.createElement('li');
    listItems = nimet[i];
    displayListItems.innerHTML = listItems;

    listContainer.append(displayListItems);
}
