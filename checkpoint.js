let bulletin = {
    partie : "Partie 1",
    notes : [],
    points : 0,
    eliminer : false,
    moyenne : false
};

// 2
let i = 0;
while (i < 10) {
    bulletin.notes.push(Math.floor(Math.random() * 21));
    i++;
}

// 3
for (let i = 0; i < bulletin.notes.length; i++) {
    if (bulletin.notes[i] > 10) {
        bulletin.points++;
    }
}
//4
for (let i = 0; i < bulletin.notes.lenght; i++) {
    if (bulletin.notes[i] === 0) {
        bulletin.eliminer = true;
    }
}

//5
let sum = 0;
for (let i = 0; i < bulletin.notes.length; i++) {
    sum += bulletin.notes[i] / bulletin.notes.length;
}
bulletin.moyenne = sum;

//6



console.log(bulletin);
// Complete le bulletin
// Your code here... :)

// Don't touch this...
module.export = bulletin;
