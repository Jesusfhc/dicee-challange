let randomNumber1 = Math.floor((Math.random() * 6)) + 1;

let randomNumber2 = Math.floor((Math.random() * 6)) + 1;


document.querySelector("img").setAttribute("src", `images/dice${randomNumber1}.png`);

document.getElementsByTagName("img")[1].setAttribute("src", `images/dice${randomNumber2}.png`);

let title = document.querySelector("h1");

if (randomNumber1 > randomNumber2) {
    title.innerText = "Le joueur 1 a gagné"
} else if (randomNumber1 < randomNumber2) {
    title.innerText = "Le jouer 2 a gagne"
} else {
    title.innerText = "C'est une égalité"
}