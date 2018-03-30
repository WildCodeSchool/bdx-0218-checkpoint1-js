const bulletin = {
    "nom de la partie" : "Partie 1 ",
    notes : [],
    points : 0,
    eliminer : false,
    moyenne : false,
    reset : () => {
        bulletin.notes = [];
        bulletin.points = 0;
        bulletin.eliminer = false;
        bulletin.moyenne = false;
    }

};

const entierAleatoire = (min, max) =>
{
 return Math.floor(Math.random() * (max - min + 1)) + min;
}

for (i=0; i<10; i++) {
    let entier = entierAleatoire(0, 20);
    bulletin.notes.push(entier);
    if (entier > 10) {
        bulletin.points += 1;
    }
    if (entier === 0) {
        bulletin.eliminer = true;
    }
}

let somme_notes = 0;

for (i=0; i<bulletin.notes.length; i++) {
    somme_notes += bulletin.notes[i];
}

let moyenne = somme_notes / 10;

console.log(bulletin);

console.log(bulletin.notes);

console.log(somme_notes);

console.log(moyenne);

console.log(bulletin.eliminer);

console.log(bulletin.points);



bulletin.reset();

console.log(bulletin);




// Complete le bulletin
// Your code here... :)

// Don't touch this...
module.export = bulletin;
