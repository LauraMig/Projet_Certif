var pVeuve = document.getElementById('paragrapheVeuve');
var tVeuve = document.getElementById('sousTitreVeuve');
var cliked = false; //valeur 

function buttonVeuve() {

    cliked = !cliked;
    console.log(cliked);

    if (cliked === true) {
        pVeuve.style.display = "block";
        tVeuve.style.backgroundColor = "black";
        tVeuve.style.color = "#E0ACAC";
    } else {
        pVeuve.style.display = "none";
        tVeuve.style.backgroundColor = "beige";
        tVeuve.style.color = "black"
    }

}


var pAbeille = document.getElementById('paragrapheAbeille');
var tAbeille = document.getElementById('sousTitreAbeille');
var clik = false; //valeur

function buttonAbeille() {

    clik = !clik;
    console.log(clik);

    if (clik === true) {
        pAbeille.style.display = "block";
        tAbeille.style.backgroundColor = "black";
        tAbeille.style.color = "#E0ACAC"

    } else {
        pAbeille.style.display = "none";
        tAbeille.style.marginBottom = "10px";
        tAbeille.style.backgroundColor = "beige";
        tAbeille.style.color = "black"

    }

}


var pScorpion = document.getElementById('paragrapheScorpion');
var tScorpion = document.getElementById('sousTitreScorpion');
var clique = false; //valeur

function buttonScorpion() {

    clique = !clique;
    console.log(clique);

    if (clique === true) {
        pScorpion.style.display = "block";
        tScorpion.style.backgroundColor = "black";
        tScorpion.style.color = "#E0ACAC"

    } else {
        pScorpion.style.display = "none";
        tScorpion.style.marginBottom = "10px";
        tScorpion.style.backgroundColor = "beige";
        tScorpion.style.color = "black"

    }

}






var pMygale = document.getElementById('paragrapheMygale');
var tMygale = document.getElementById('sousTitreMygale');
var cliquer = false; //valeur

function handleClick() {

    cliquer = !cliquer;
    console.log(cliquer);

    if (cliquer === true) {
        pMygale.style.display = "block";
        tAbeille.style.backgroundColor = "black";

    } else {
        pMygale.style.display = "none";
        tMygale.style.marginBottom = "10px";
        tAbeille.style.backgroundColor = "beige";

    }

}

