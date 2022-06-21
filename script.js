var random = Math.floor(Math.random() * 100) + 1;

const numbers = document.querySelectorAll(".btn");
const choix = document.querySelector("#number");
const responce = document.querySelector("#responce");
const valider = document.querySelector(".valider");
const retour = document.querySelector(".retour");
const suppr = document.querySelector(".suppr");
const btn_coeur = document.querySelector(".coeur");
const victoire = document.querySelector(".victoire");
const defaite = document.querySelector(".defaite");
const mask = document.querySelector(".mask");
const resultV = document.querySelector("#resultV");
const resultD = document.querySelector("#resultD");
const containVie = document.querySelector(".vies");
var vies = document.querySelectorAll(".vie");
var pdv = 6;
const oneVie = document.querySelector(".vie");
var zoneHist = document.querySelector(".historique");

/******************************************/
/*             BTN NUMBER                */
/****************************************/
numbers.forEach(number => {
    number.addEventListener("click", () => {
        let chiffre = number.getAttribute("data-number");
        choix.textContent += chiffre
        if (parseInt(choix.textContent) > 100) {
            choix.textContent = "100"
        }
        switch (parseInt(choix.textContent)) {
            case 01:
            choix.textContent = 1;
            break;
            case 02:
            choix.textContent = 2;
            break;
            case 03:
            choix.textContent = 3;
            break;
            case 04:
            choix.textContent = 4;
            break;
            case 05:
            choix.textContent = 5;
            break;
            case 06:
            choix.textContent = 6;
            break;
            case 07:
            choix.textContent = 7;
            break;
            case 08:
            choix.textContent = 8;
            break;
            case 09:
            choix.textContent = 9;
            break;
        }
    })
})

/******************************************/
/*             BTN VALIDER               */
/****************************************/
valider.addEventListener("click", () => {
    if (random < parseInt(choix.textContent)) {
        responce.classList.remove("plus");
        responce.classList.add("moins");
        containVie.removeChild(containVie.lastChild)
        containVie.removeChild(containVie.lastChild)
        pdv -= 1
        var hist = document.createElement("p");
        hist.innerHTML = choix.textContent;
        var div = document.createElement("div");
        div.classList.add("mini_moins");
        zoneHist.appendChild(hist);
        zoneHist.appendChild(div);
    } else if (random > parseInt(choix.textContent)) {
        responce.classList.remove("moins");
        responce.classList.add("plus");
        containVie.removeChild(containVie.lastChild);
        containVie.removeChild(containVie.lastChild);
        pdv -= 1
        var hist = document.createElement("p");
        hist.innerHTML = choix.textContent;
        var div = document.createElement("div");
        div.classList.add("mini_plus");
        zoneHist.appendChild(hist);
        zoneHist.appendChild(div);
    } else {
        victoire.style.display = "block";
        mask.style.display = "block";
        responce.classList.add("bravo");
        resultV.textContent = random;
    }
    choix.textContent = "";
    if (pdv == 3) {
        btn_coeur.classList.remove("none");
    } else if (pdv == 1) {
        oneVie.classList.add("anim_vie");
    } else if (pdv == 0) {
        defaite.style.display = "block";
        mask.style.display = "block";
        resultD.textContent = random;
    }
})


/******************************************/
/*             BTN RETOUR                */
/****************************************/
retour.addEventListener("click", () => {
    let choixRetour = choix.textContent.slice(0, -1);
    choix.textContent = choixRetour
})

/******************************************/
/*             BTN SUPPR                 */
/****************************************/
suppr.addEventListener("click", () => {
    choix.textContent = "";
})

/******************************************/
/*             BTN COEUR                 */
/****************************************/
btn_coeur.addEventListener("click", () => {
    var randomCoeur = Math.floor(Math.random() * 5) + 1;
    if(randomCoeur == 5) {
        var coeurPlus = document.createElement("div");
        coeurPlus.classList.add("vie");
        containVie.appendChild(coeurPlus);
        pdv += 1;
        btn_coeur.remove();
    } else {
        containVie.removeChild(containVie.lastChild);
        containVie.removeChild(containVie.lastChild);
        pdv -= 1;
        btn_coeur.remove();
    }
})
