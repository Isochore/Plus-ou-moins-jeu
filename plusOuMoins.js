
    const titre = document.querySelector("#titre");
    const rep = document.querySelector("#reponse");
    const btn = document.querySelector("#btn");
    const reset = document.querySelector("#reset");
    const coups = document.querySelector("#coups");
    var number = Math.floor(Math.random() * (99 - 1 + 1)) + 1;
    var i = 0;
    var reste = 10;

    var newImg = document.createElement("img"); 
    newImg.setAttribute('src', 'win.gif');
    newImg.className = "winImg";
    newImg.style.marginTop = "50px";
    var currentDiv = document.querySelector(".win");

    var newImg2 = document.createElement("img"); 
    newImg2.setAttribute('src', 'lose.gif');
    newImg2.className = "winImg";
    newImg2.style.marginTop = "50px";
    var currentDiv = document.querySelector(".win");

    // var newRep = document.createElement("p");
    var divPlus = document.querySelector("#repPlus");
    var divMoins = document.querySelector("#repMoins");

    var newRepMoins
    
    console.log(number);

 btn.addEventListener("click", (event) => {
     event.preventDefault;
     if (rep.value > number && rep.value < 100 && i != 9 && Number.isInteger(parseFloat(rep.value))) {
         titre.innerHTML = "C'est moins !";
         i++;
         reste--;
         coups.innerHTML = "Coups restants : " + reste;
         let newRep = document.createElement("p");
         newRep.innerHTML = rep.value;
         newRep.className = "num";
         divMoins.appendChild(newRep);
     } else if (rep.value < number && rep.value > 0 && i != 9 && Number.isInteger(parseFloat(rep.value))) {
         titre.innerHTML = "C'est plus !";
         i++;
         reste--;
         coups.innerHTML = "Coups restants : " + reste;
         let newRep = document.createElement("p");
         newRep.innerHTML = rep.value;
         newRep.className = "num";
         divPlus.appendChild(newRep);
     } else if (rep.value == number || (i == 9 && rep.value == number)) {
        titre.innerHTML = "Vous avez trouvé, bravo !";
        reste--;
        coups.innerHTML = "Coups restants : " + reste;
        rep.disabled = "true";
        btn.disabled = "true";

        currentDiv.appendChild(newImg);

     } else if (i != 9) {
        titre.innerHTML = "Vous vous êtes trompé de valeur !";
     } 
      else if (i == 9 && rep.value != number) {
         titre.innerHTML = "Vous avez perdu ! La réponse était " + number;
         coups.innerHTML = "Coups restants : 0";
         rep.disabled = "true";
         btn.disabled = "true";
         currentDiv.appendChild(newImg2);
      } 
     rep.value = "";
     rep.focus();
     console.log(i);
 })

rep.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        event.preventDefault();
        if (rep.value > number && rep.value < 100 && i != 9 && Number.isInteger(parseFloat(rep.value))) {
            titre.innerHTML = "C'est moins !";
            i++;
            reste--;
            coups.innerHTML = "Coups restants : " + reste;
            let newRep = document.createElement("p");
            newRep.innerHTML = rep.value;
            newRep.className = "num";
            divMoins.appendChild(newRep);
        } else if (rep.value < number && rep.value > 0 && i != 9 && Number.isInteger(parseFloat(rep.value))) {
            titre.innerHTML = "C'est plus !";
            i++;
            reste--;
            coups.innerHTML = "Coups restants : " + reste;
            let newRep = document.createElement("p");
            newRep.innerHTML = rep.value;
            newRep.className = "num";
            divPlus.appendChild(newRep);
        } else if (rep.value == number) {
           titre.innerHTML = "Vous avez trouvé, bravo !";
           reste--;
           coups.innerHTML = "Coups restants : " + reste;
           rep.disabled = "true";
           btn.disabled = "true";

           currentDiv.appendChild(newImg);
           
        } else if (i != 9) {
           titre.innerHTML = "Vous vous êtes trompé de valeur !";
        } else if (i == 9 && rep.value != number) {
            titre.innerHTML = "Vous avez perdu ! La réponse était " + number;
            coups.innerHTML = "Coups restants : 0";
            rep.disabled = "true";
            btn.disabled = "true";
            currentDiv.appendChild(newImg2);
         }
        rep.value = "";
        rep.focus();
        console.log(i);
    }
});

function verif (event) {
	 		
	let keyCode = event.which ? event.which : event.keyCode;
	let touche = String.fromCharCode(keyCode);			
	let caract = "0123456789";
			
	if(caract.indexOf(touche) >= 0) {
		rep.value += touche;
	}
			
}

reset.addEventListener ("click", (event) => {
    event.preventDefault();
    if (document.querySelector(".winImg") != null) {
    let imgNode = document.querySelector(".winImg");
    imgNode.remove();
    titre.innerHTML = "Bienvenue au jeu du plus ou moins !";
    coups.innerHTML = "Coups restants : 10";
    btn.disabled = "";
    rep.disabled = "";
    rep.value = "";
    number = Math.floor(Math.random() * (99 - 1 + 1)) + 1;
    i = 0;
    reste = 10;
    let pNode = document.querySelectorAll(".num");
    for (let i = 0; i < pNode.length; i++) {
        pNode[i].remove();
    }
    console.log(number);
    } else {
        titre.innerHTML = "Bienvenue au jeu du plus ou moins !";
        coups.innerHTML = "Coups restants : 10";
        btn.disabled = "";
        rep.disabled = "";
        rep.value = "";
        number = Math.floor(Math.random() * (99 - 1 + 1)) + 1;
        i = 0;
        reste = 10;
        let pNode = document.querySelectorAll(".num");
        for (let i = 0; i < pNode.length; i++) {
            pNode[i].remove();
        }
        console.log(number);
    }
})