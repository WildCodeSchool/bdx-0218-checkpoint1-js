const bulletin = {
     nom : "Partie 1",
     notes : [],
     points : 0,
     eliminer : false,
     moyenne : false,
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

for (let i = 0; i < 10; i++) {
     bulletin.notes[i] = Math.round(Math.random() * 20);
}
for (let j = 0; j < bulletin.notes.length; j++) {
     if (bulletin.notes[j] >= 10) {
          bulletin.points += (bulletin.notes[j] -10);
     }
}
CalcMoy = (_array) => {
     let moy = 0;
     for (let k = 0; k < _array.length; k++) {
          moy += _array[k];
     }
     moy = moy/_array.length;
     if (moy >= 10) {
          bulletin.moyenne = true;
     }
     return moy
}
console.log("moyenne = ", CalcMoy(bulletin.notes));
bulletin.notes.map(x => x == 0 ? bulletin.eliminer = true : false);
console.log("résultat et avant reset :", bulletin);
bulletin.reset()();
console.log("apres reset : ", bulletin);

// Don't touch this...
module.export = bulletin;
