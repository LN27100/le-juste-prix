// let compteurTentative = 10
// let imag = document.getElementById('card-img-top')
// let nameObject = document.getElementById('card-title')
// let tentative = document.getElementById('nbrOfTentatives')
// let button = document.getElementById('btn')
// let message = document.getElementById('message')
// let realPrice = automatic()
// let max = 100


// tu crees une balise img dans lequel tu vas mettre chacune de tes images a l'aide d'une variable 
// en indiquant ou se trouve ton image src
// j'ai mis une taille pour que ça ne depasse pas de ta card 

const mouchoirImg = document.createElement('img')
mouchoirImg.src = "assets/img/mouchoir.JPG"
mouchoirImg.style = 'width : 200px'

const chaiseImg = document.createElement('img')
chaiseImg.src = "assets/img/chaise-de-developpeur.JPG"
chaiseImg.style = 'width : 200px'

const grainImg = document.createElement('img')
grainImg.src = "assets/img/grain-cafe.jpg"
grainImg.style = 'width : 200px'

const pcImg = document.createElement('img')
pcImg.src = "assets/img/pc-casse.JPG"
pcImg.style = 'width : 200px'


const tasseImg = document.createElement('img')
tasseImg.src = "assets/img/tasse-cassee.JPG"
tasseImg.style = 'width : 200px'

// tu rentres toutes tes variables dans un tableau 
const imageObject = [mouchoirImg, chaiseImg, grainImg, pcImg, tasseImg ]


// on va pouvoir generer un index aleatoire de notre tableau imageObject => imageObject[indiceAleatoire]
let indiceAleatoire = Math.floor(Math.random() * imageObject.length)

// puis on l'affiche parent.appenChild.enfant, ton image sera l'enfant de ton id= image 
document.querySelector('#image').appendChild(imageObject[indiceAleatoire])
 

// creation des noms de chaque objet et du tableau des noms
const nameMouchoir = document.createElement('p')
nameMouchoir.innerHTML = "Ustensil d'autmone peu servit"

const nameChaise = document.createElement('p')
nameChaise.innerHTML = "Chaise de développeur Web"

const nameGrain = document.createElement('p')
nameGrain.innerHTML = "Grain de café"

const namePc = document.createElement('p')
namePc.innerHTML = "PC collector"

const nameTasse = document.createElement('p')
nameTasse.innerHTML = "Tasse à café en kit"

const displayNameObject = [nameMouchoir, nameChaise, nameGrain, namePc, nameTasse]

document.querySelector('#message').appendChild(displayNameObject[indiceAleatoire])

// creation du descriptif de chaque objet et du tableau des noms
const textMouchoir = document.createElement('t')
textMouchoir.innerHTML = "Ustensil d'autmone peu servit"

const textChaise = document.createElement('t')
textChaise.innerHTML = "Chaise de bureau ayant prouvé sa solidité."

const textGrain = document.createElement('t')
textGrain.innerHTML = "Grain de café"

const textPc = document.createElement('t')
textPc.innerHTML = "PC collector"

const textTasse = document.createElement('t')
textTasse.innerHTML = "Tasse à café en kit"

const displayTextObject = [textMouchoir, textChaise, textGrain, textPc, textTasse]
// affichage des images et leur noms aleatoirement : 

document.querySelector('#descriptif').appendChild(displayTextObject[indiceAleatoire])







// function verifNumber() {
//     let testPrice = document.getElementById('test-price').value

//     if (compteurTentative == 0) {
//         tentative.innerHTML = "Il vous reste " + compteurTentative + " tentatives."
//         message.innerHTML = "Echec, le juste prix était de " + realPrice + " €"
//         button.disable = true
//     } else {
//         if (testPrice > realPrice) {
//             message.innerHTML = "Moins"
//             compteurTentative--
//             tentative.innerHTML = "Il vous reste " + compteurTentative + " tentatives."
//         }
//         if (testPrice < realPrice) {
//             message.innerHTML = "Plus"
//             compteurTentative--
//             tentative.innerHTML = "Il vous reste " + compteurTentative + " tentatives."
//         }
//         if (testPrice == realPrice) {
//             message.innerHTML = "Vicoire, vous remportez l'objet !"
//             tentative.innerHTML = "Il vous reste " + compteurTentative + " tentatives."
//             button.disable = true
//         }
//     }
// }
// button.addEventListener('click', verifNumber)
