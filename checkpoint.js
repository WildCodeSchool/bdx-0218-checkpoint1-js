const bulletin = {
    nom: "Partie 1",
    notes: [],
    points: 0,
    eliminer: false,
    moyenne: false,
    reset() {
        return () => {
            this.nom = "Partie 1";
            this.notes = [];
            this.points = 0;
            this.eliminer = false;
            this.moyenne = false;
        }
    }
}

console.log();

// Complete le bulletin

for (let i = 0; i < 10; i++) {
    bulletin.notes[i] = Math.round(Math.random() * 20);
}
for (i = 0; i < bulletin.notes.length; i++) {
    if (bulletin.notes[i] >= 10) {
        bulletin.points += 1;
    } else if (bulletin.notes[i] == 0) {
        return eliminer = true;
    } else {
        bulletin.points += 0;
    }
};

for (i = 0; i < bulletin.notes.length; i++) {
    bulletin.moyenne += bulletin.notes[i] / bulletin.notes.length;
};

// Don't touch this....
console.log(bulletin)
module.export = bulletin;