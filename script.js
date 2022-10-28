const affichage = document.querySelector(".ecran");
let x = true


// Bouton eqal
document.querySelector("#equal").addEventListener('click', ()=> {
    const write = affichage.textContent;
    affichage.textContent = eval(write);
    let array = affichage.textContent.split("");
    let str="";
    for( i=0; i<12; i++){
        str += array[i];
        console.log(str);
        
    }
    affichage.textContent = str

})

// Bouton racine carré
document.querySelector("#rac").addEventListener('click', ()=> {
    if (affichage.textContent==" ") {
        affichage.innerText = " "
        
    }else{
        const write = affichage.textContent;
        affichage.textContent = Math.sqrt(write);
        let array = affichage.textContent.split("");
        let str="";
        for( i=0; i<12; i++){
            str += array[i];
            console.log(str);
            
        }
        affichage.textContent = str
    }
})

// Bouton expo2
document.querySelector("#expo2").addEventListener('click', ()=> {
    if (affichage.textContent==" ") {
        affichage.innerText = " "
        
    }else{
        const write = affichage.textContent;
        affichage.textContent = Math.pow(write,2);
        if (affichage.textContent.length>8) {
            affichage.textContent = Math.pow(write,3).toPrecision(6);
        }
        // let array = affichage.textContent.split("");
        // let str="";
        // for( i=0; i<12; i++){
        //     str += array[i];
        //     console.log(str);
            
        // }
        // affichage.textContent = str
    }
})

// Bouton expo3
document.querySelector("#expo3").addEventListener('click', ()=> {
    if (affichage.textContent==" ") {
        affichage.innerText = " "
        
    }else{
        const write = affichage.textContent;
        affichage.textContent = Math.pow(write,3);

        if (affichage.textContent.length>8) {
            affichage.textContent = Math.pow(write,3).toPrecision(6);
        }
        // let array = affichage.textContent.split("");
        // let str="";
        // for( i=0; i<12; i++){
        //     str += array[i];
        //     console.log(str);
            
        // }
        // affichage.textContent = str
    }
})


// Bouton off
document.querySelector("#off").addEventListener('click', ()=> {
    const write = affichage.textContent;
    affichage.textContent = " ";
    x = false;
})

// Bouton AC
document.querySelector("#reset").addEventListener('click', ()=> {
    const write = affichage.textContent;
    affichage.textContent = 0;
    x = true;
})

// Bouton BackSpace
document.querySelector("#back").addEventListener('click', ()=> {

    let write = affichage.textContent;
    console.log({write: write.length}); 
    if (write.length == 1) {
        console.log("condition remplie");
        affichage.textContent = "0";
    }else{
        write = write.substring(0, write.length - 1);
        affichage.textContent = write;
    }
})


// Les autres boutons
document.querySelectorAll("#press").forEach(function (eachButton) {
    eachButton.addEventListener('click',()=>{

        if (affichage.textContent.length = 1 && affichage.textContent=="0" ) {
            affichage.innerText = " "
        }
        if (x &&  affichage.textContent.length < 11) {
        affichage.innerText += eachButton.textContent;
       }
      
    })
    
})



















//Horloge

const heuresDiv = document.querySelector('.heures');
const dateDiv = document.querySelector('.date');

const affichageHeure = function() {
    // declaration des variables :

    let today, annee, listeMois, mois, listeJours, jourNUmero,
    jourNom, heures, minutes, secondes, deuxChiffres;

    // Recuperer la date actuelle :
    today = new Date();

    // recuperer l'annee :
    annee = today.getFullYear();

    // recuperer le mois:
    listeMois = ["Janvier", "Fevrier", "Mars", "Avril", "Mai", "Juin",
    "Juillet", "Aout", "Septembre", "Octobre", "Novembre", "Decembre"];
    mois = listeMois[today.getMonth()];

    // recuoerer le numero du jour du mois
    jourNUmero = today.getDate();

    // recuperer jours. mais la sumaine commence le dimanche en javascript
    listeJours = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
    jourNom = listeJours[today.getDay()];
    // afficher les heures,minutes et secoonde en chiffres :
    deuxChiffres = function(element) {
        if(element < 10) {
            return element = "0" + element;
        } else {
            return element;
        }
        
    }
    //recuperer les heures :
    heures = deuxChiffres(today.getHours());

    //recuperer les minutes:
    minutes = deuxChiffres(today.getMinutes());

    // les secondes
    secondes = deuxChiffres(today.getSeconds());

    // affichage dans nox div de html

    heuresDiv.textContent = heures + ":" + minutes + ":" + secondes;
    dateDiv.textContent = jourNom + ", " + jourNUmero + " " + mois + " " + annee;

    // lancement de la fonction affichage heure toutes les 1000 ms, en gros chaque seconde quoi
    setTimeout(affichageHeure, 1000);
}
affichageHeure();
