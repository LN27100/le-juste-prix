let nameBody = ["Chaise de développeur web", "L'indispensable du dév", "Ustensile de saison", "Tasse à café en kit", "Pc collector"]
let imagObject = ["chaise-de-developpeur.JPG", "grain-cafe.jpg", "mouchoir.JPG", "pc-casse.JPG", "tasse-casse.JPG"]
let testPrice
let nbrObject = Math.floor(Math.random() * Math.floor(max))
let compteurTentative
let imag = document.getElementById('card-img-top')
let nameObject = document.getElementById('card-title')
let tentative = document.getElementById('nbrOfTentatives')
let button = document.getElementById('btn')
let message = document.getElementById('message')
let realPrice = automatic()


function automatic() {
    return Math.floor((Math.random() * 100) + 1)
}
console.log(realPrice)


function imageChoice(tableau) {
    let numberAleatoire = Math.floor(Math.random() * tableau.length);
    return tableau[numberAleatoire];
}
let nameBodyAleatoire = choisirObjetAleatoire(nameBody);
console.log(nameBodyAleatoire);



function verifNumber() {
    testPrice = document.getElementById('test-price').value

    if (compteurTentative == 0) {
        tentative.innerHTML = "Il vous reste " + compteurTentative + " tentatives."
        message.innerHTML = "Echec, le juste prix était de " + realPrice + " €"
        button.disable = true
    } else {
        if (tentative > realPrice) {
            message.innerHTML = "Moins"
            compteurTentative--
            tentative.innerHTML = "Il vous reste " + compteurTentative + " tentatives."
        }
        if (tentative < realPrice) {
            message.innerHTML = "Plus"
            compteurTentative--
            tentative.innerHTML = "Il vous reste " + compteurTentative + " tentatives."
        }
        if (tentative == realPrice) {
            message.innerHTML = "Vicoire, vous remportez l'objet !"
            tentative.innerHTML = "Il vous reste " + compteurTentative + " tentatives."
            button.disable = true
        }
    }
}
button.addEventListener('click', verifNumber, false)
