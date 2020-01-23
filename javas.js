let heures = "";
let minutes = "";
let secondes = "";

heures = Number(prompt("Entrez une Heure", 10));
while ((heures > 23) || (heures < 0)){
    heures = Number(prompt("Entrez une Heure"));
}


minutes = Number(prompt("Entrez une minute", 10));
while ((minutes > 59) || (minutes < 0)){
    minutes = Number(prompt("Entrez une minute"));
}


secondes = Number(prompt("Entrez une seconde", 10));
while ((secondes > 59) || (secondes < 0)){
    secondes = Number(prompt("Entrez une seconde"));
}
secondes +=1

if (secondes > 59){
    minutes +=1;
    secondes = 0;
    if (minutes > 59){
        heures += 1;
        minutes = 0;
        if (heures > 23){
            heures = 0;
            minutes = 0;
            secondes = 0;
        }
    }
}

alert(`Il est : ${heures}h ${minutes}min ${secondes}sec`)