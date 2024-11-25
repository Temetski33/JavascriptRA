const tulostus =
    document.querySelector('#tulostusAlue')

let originalList = Array.from(Array(26).keys())

function even(text) {
    let evenList = []
    for(let luku of text) {
        if (luku % 2 === 0) {
            evenList.push(luku)
        }
    }
    return evenList;
}


parillistettu = even(originalList)
tulostus.innerHTML += `Tulostetaan alkuperäinen lista ja parillisten lista: <br> <br>`
tulostus.innerHTML += `${originalList} <br>`
tulostus.innerHTML += `${parillistettu}`