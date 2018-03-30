let bulletin = {};

console.log(bulletin);
// Complete le bulletin
// Your code here... :)
bulletin = {
  'nom de la partie': "Partie 1",
  notes: [],
  points: 0,
  eliminer: false,
  moyenne: false,
  reset: function() {
    for (i in bulletin) {
      delete bulletin[i];
    }
    console.log('Le bulletin vient d\'être réinitialisé');
  }
}

// Ajouter 10 notes comprises entre 0 et 20
for (var i = 0; i < 10; i++) {
  bulletin.notes.push(Math.round(Math.random() * 20));
}

// Modifier la propriété points qui sera le nombre de points sachant qu’un point est égal à une note supérieure à 10.
for (i of bulletin.notes) {
  if (i > 10) {
    bulletin.points += 1;
  }
}

// Modifier la propriété eliminer si une des notes est égale à 0.
for (i of bulletin.notes) {
  if (i === 0) {
    bulletin.eliminer = true;
  }
}

// Modifier la propriété moyenne pour calculer la moyenne des notes.
let total = 0;
for (var i = 0; i < bulletin.notes.length; i++) {
  total += bulletin.notes[i]
}
let avg = total / bulletin.notes.length;

// Créer une sixième propriété nommée reset qui sera une fonction permettant de réinitialiser toutes les propriétés.


console.log('La moyenne est de ' + avg);
console.log(bulletin);
bulletin.reset()
console.log(bulletin);
// Don't touch this...
module.export = bulletin;
