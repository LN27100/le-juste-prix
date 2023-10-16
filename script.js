let button = document.querySelector("#btn")
let message = document.querySelector('#message')
let messageTwo = document.querySelector('#messageTwo')
let nbrOfTentatives = document.querySelector('#nbrOfTentatives')


// creation des noms de chaque objet
const mouchoirImg = document.createElement('img')
mouchoirImg.src = "assets/img/mouchoir.JPG"
mouchoirImg.style = 'width : 300px'

const chaiseImg = document.createElement('img')
chaiseImg.src = "assets/img/chaise-de-developpeur.JPG"
chaiseImg.style = 'width : 300px'

const grainImg = document.createElement('img')
grainImg.src = "assets/img/grain-cafe.jpg"
grainImg.style = 'width : 300px'

const pcImg = document.createElement('img')
pcImg.src = "assets/img/pc-casse.JPG"
pcImg.style = 'width : 300px'

const tasseImg = document.createElement('img')
tasseImg.src = "assets/img/tasse-cassee.JPG"
tasseImg.style = 'width : 300px'

// tableau des variables
const imageObject = [mouchoirImg, chaiseImg, grainImg, pcImg, tasseImg]

let indiceAleatoire = Math.floor(Math.random() * imageObject.length)

//affichage d'une image de façon aléatoire :
document.querySelector('#image').appendChild(imageObject[indiceAleatoire])




// creation des noms de chaque objet
const nameMouchoir = document.createElement('n')
nameMouchoir.innerHTML = "Ustensil d'autmone"
nameMouchoir.style = 'font-weight: bold'

const nameChaise = document.createElement('n')
nameChaise.innerHTML = "Chaise de développeur Web"
nameChaise.style = 'font-weight: bold'

const nameGrain = document.createElement('n')
nameGrain.innerHTML = "Grain de café"
nameGrain.style = 'font-weight: bold'

const namePc = document.createElement('n')
namePc.innerHTML = "PC collector"
namePc.style = 'font-weight: bold'

const nameTasse = document.createElement('n')
nameTasse.innerHTML = "Tasse à café en kit"
nameTasse.style = 'font-weight: bold'

const displayNameObject = [nameMouchoir, nameChaise, nameGrain, namePc, nameTasse]

//affichage d'une image et son nom de façon aléatoire :
document.querySelector('#message').appendChild(displayNameObject[indiceAleatoire])




// creation du descriptif de chaque objet
const textMouchoir = document.createElement('d')
textMouchoir.innerHTML = "Mouchoir papier peu servi pouvant encore être utilisé en cas de rhume automnal."
textMouchoir.style = 'font-family: Architects Daughter, cursive'

const textChaise = document.createElement('d')
textChaise.innerHTML = "Chaise de bureau ayant prouvé sa solidité."
textChaise.style = 'font-family: Architects Daughter, cursive'

const textGrain = document.createElement('d')
textGrain.innerHTML = "Grain à croquer pour une énergie immédiate."
textGrain.style = 'font-family: Architects Daughter, cursive'

const textPc = document.createElement('d')
textPc.innerHTML = "Ordinateur portable de collection ayant servi uniquement au JavaScript.r"
textPc.style = 'font-family: Architects Daughter, cursive'

const textTasse = document.createElement('d')
textTasse.innerHTML = "Tasse puzzle, initiation à la logique !"
textTasse.style = 'font-family: Architects Daughter, cursive'

const displayTextObject = [textMouchoir, textChaise, textGrain, textPc, textTasse]

// affichage des images et leur texte de façon aléatoire : 
document.querySelector('#descriptif').appendChild(displayTextObject[indiceAleatoire])



let realPrice = Math.floor(Math.random() * 100) + 1
max = 100
compteurTentative = 10

console.log('eerererer')
//fonction lancement du jeu
let buttonDislable = true
function verifNumber() {

    let testPrice = document.getElementById('test-price').value

   

    if (compteurTentative == 0) {
        nbrOfTentatives.innerHTML = "Il vous reste " + compteurTentative + " tentatives."
        messageTwo.innerHTML = "Echec, le juste prix était de " + realPrice + " €"
        buttonDislable = true
    } else {
        if (testPrice > realPrice) {
            messageTwo.innerHTML = "Moins"
            compteurTentative--
            nbrOfTentatives.innerHTML = "Il vous reste " + compteurTentative + " tentatives."
        }
        if (testPrice < realPrice) {
            messageTwo.innerHTML = "Plus"
            compteurTentative--
            nbrOfTentatives.innerHTML = "Il vous reste " + compteurTentative + " tentatives."
        }
        if (testPrice == realPrice) {
            messageTwo.innerHTML = "Vicoire, vous remportez l'objet !"
            nbrOfTentatives.innerHTML = "Il vous reste " + compteurTentative + " tentatives."
            buttonDislable = true
        }
    }
}
button.addEventListener('click', verifNumber)