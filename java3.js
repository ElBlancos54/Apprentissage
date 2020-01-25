let personnage = {
    nom : prompt("Quel est le nom de ton personnage ?"),
    sante : 100,
    force : 50,
}
let bijouxDeForce = {
    force : 50,
}
alert(`L'aventure commence avec ${personnage.nom}, il a ${personnage.sante} points de santé et ${personnage.force} points de force`);

let chemin = prompt('Face à toi se trouve deux chemins, lequel choisis tu ? "Gauche", ou "Droite"?');

if (chemin == "Gauche"){
    alert(`En passant par la ${chemin} tu viens d'éviter un dragon et tu trouves un bijoux de force`);
    let bijoux = prompt("Veux tu porter le bijoux ?")
    if (bijoux == "Oui"){
        alert(`La force de ${personnage.nom} a augmenté !`);
        personnage.force = personnage.force + bijouxDeForce.force;
        alert(`Tu as désormais ${personnage.force} points de force !`);
        alert("Bravo tu as gagné merci d'avoir joué !")
    } else {
        alert(`Ta force reste à ${personnage.force} points de force`);
        
    }
} else if (chemin == "Droite"){
    alert("Te voilà face à un Dragon ! Celui ci t'attaque et t'enlève 5 milliards de points de vie !");
    alert(`${personnage.nom} est mort, merci d'avoir joué`)
} else {}