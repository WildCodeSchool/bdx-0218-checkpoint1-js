//  1.  Créer un objet bulletin comportant les 5 propriétés suivantes :
let bulletin = {
    nom: "Partie 1",
    notes: [],
    points: 0,
    eliminer: false,
    moyenne: false,
    reset: function() {
        this.nom = "Partie 1";
        this.notes = [];
        this.points = 0;
        this.eliminer = false;
        this.moyenne = false;
    }
}
let sum = 0;
// Ajouter 10 notess comprises entre 0 et 20, 
//obtenues aléatoirement avec `Math.random()`, dans le tableau `notess`.

function getRandomInt(max) {
    for (let i = 0; i < 9; i++) {
        bulletin.notes[i] = Math.floor(Math.random() * Math.floor(max));
        bulletin.notes.push(bulletin.notes[i]);
    }
    // return bulletin.notes
}
getRandomInt(20);
console.log(bulletin.notes);
// console.log(bulletin.points);

// Modifier la propriété `points` qui sera le nombre de points sachant qu’un point est
// égal à une note supérieure à 10.
for (let i = 0; i < bulletin.notes.length; i++) {
    if (bulletin.notes[i] > 10) {
        bulletin.points++
    }
    if (bulletin.notes[i] === 0) {
        bulletin.eliminer = true;
    }
    sum += bulletin.notes[i];
}

bulletin.moyenne = sum / bulletin.notes.length;
console.log(bulletin.notes.length);
console.log(bulletin.points)
console.log(bulletin.eliminer)
console.log(sum)
console.log(bulletin.moyenne)
bulletin.reset();






// for (var i = bulletin.notes.length - 1; i >= 0; i--) {
//     bulletin.notes[i] > 10 ? bulletin.point++ : "";
// }
// console.log(bulletin.point);


// Don't touch this...
module.export = bulletin;