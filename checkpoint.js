const bulletin = {
    'nom de la partie': "Partie 1",
    'notes': [],
    'points': 0,
    'eliminer': false,
    'moyenne': false
};

console.log(bulletin);
// Complete le bulletin
// Your code here... :)

// 2 - Ajout 10 notes entre 0 et 20
let i = 0;
while (i < 10) {
    i++;
    bulletin.notes.push(Math.floor(Math.random() * 21));
}

// 3 - points
for (let i = 0; i < bulletin.notes.length; i++) {
    if (bulletin.notes[i] > 10) {
        bulletin.points++;
    };
}

// 4 - eliminer
for (let i = 0; i < bulletin.notes.length; i++) {
    if (bulletin.notes[i] === 0) {
        bulletin.eliminer = true;
    };
}

// 5 - moyenne
let moyenne = 0;
for (let i = 0; i < bulletin.notes.length; i++) {
    moyenne += bulletin.notes[i] / bulletin.notes.length;
}
bulletin.moyenne = Math.round(moyenne*100)/100; // arrondir 2 chiffres après virgule

// 6 - reset
bulletin.reset = function() {

};

console.log(bulletin);
// bulletin.reset();
// console.log(bulletin);
// Don't touch this...
module.export = bulletin;
