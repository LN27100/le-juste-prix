let nameBody = ["Chaise de développeur web", "L'indispensable du dév", "Ustensile de saison", "Tasse à café en kit", "Pc collector"]
let imagObject = ["chaise-de-developpeur.JPG", "grain-cafe.jpg", "mouchoir.JPG", "pc-casse.JPG", "tasse-casse.JPG"]
let nbrObject = Math.floor(Math.random() * Math.floor(max))
let compteurTentative = 10
let imag = document.getElementById('card-img-top')
let nameObject = document.getElementById('card-title')
let tentative = document.getElementById('nbrOfTentatives')
let button = document.getElementById('btn')
let message = document.getElementById('message')
let realPrice = automatic()
let max = 100

function automatic(max) {
    return Math.floor((Math.random() * max) + 1)
}
console.log(realPrice)


function imageChoice(tableau) {
    return nameBody[Math.floor(Math.random() * tableau.length)]
}
let nameBodyAleatoire = imageChoice(nameBody)
console.log(nameBodyAleatoire)



function verifNumber() {
    let testPrice = document.getElementById('test-price').value

    if (compteurTentative == 0) {
        tentative.innerHTML = "Il vous reste " + compteurTentative + " tentatives."
        message.innerHTML = "Echec, le juste prix était de " + realPrice + " €"
        button.disable = true
    } else {
        if (testPrice > realPrice) {
            message.innerHTML = "Moins"
            compteurTentative--
            tentative.innerHTML = "Il vous reste " + compteurTentative + " tentatives."
        }
        if (testPrice < realPrice) {
            message.innerHTML = "Plus"
            compteurTentative--
            tentative.innerHTML = "Il vous reste " + compteurTentative + " tentatives."
        }
        if (testPrice == realPrice) {
            message.innerHTML = "Vicoire, vous remportez l'objet !"
            tentative.innerHTML = "Il vous reste " + compteurTentative + " tentatives."
            button.disable = true
        }
    }
}
button.addEventListener('click', verifNumber)
