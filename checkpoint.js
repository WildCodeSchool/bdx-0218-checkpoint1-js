const bulletin = {};

console.log(bulletin);
// Complete le bulletin
// Your code here... :)

class bulletin {
constructor(nom_de_la_partie, notes, points, eliminer, moyenne) {
    this.nom_de_la_partie = "Partie 1";
    this.notes = [];
    this.points = 0;
    this.eliminer = false;
    this.moyenne = false;
    
    
for(i = 0; i < 10; i++) {
    this.notes[i] = Math.floor(math.random() * 20);
    }

for(j = 0; j < this.notes.length; j++) {    
    if this.notes[i] > 10 {
        return true;
    }
    this.points += 1; 
    }

for(k = 0; k < this.notes.length; k++) {
    if this.notes[i] === 0 {
        this.eliminer = true;
        }
    }

this.moyenne = ((this.notes.reduce((a, b)=> a + b,0))/this.notes.length >= 10);

    
}

}




// Don't touch this...
module.export = bulletin;
