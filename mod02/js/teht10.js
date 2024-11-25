const tulostus =
    document.querySelector('#tulostusAlue')

let toistot = +prompt("Anna ehdokkaiden määrä: ")
let nimet = []

for (let i = 0; i<toistot; i++) {
    let arvo =
        prompt(`Syötä nimi ehdokkaalle ${i+1}:`)
    const kandidaatti = {
      name: arvo,
      votes: 0,
    }
    nimet.push(kandidaatti)
}


let aanestajat = +prompt("Syötä äänestäjien määrä: ")

for (let i = 0; i<aanestajat; i++) {
    let teksti =
        prompt(`Äänestäjä ${i+1} syötä äänestettävä:`)
    for(let i = 0; i<toistot; i++) {
        if (teksti === nimet[i].name) {
            nimet[i].votes += 1
            break
        }
    }
}




nimet.sort((a, b) => b.votes - a.votes)
tulostus.innerHTML += "Tulostetaan tulokset konsoliin."

console.log("Voittaja on " + nimet[0].name + " joka sai " + nimet[0].votes + " ääntä.")
console.log("tulokset:")
for(let i = 0; i<toistot; i++) {
    console.log(nimet[i].name + ": " + nimet[i].votes)
}
