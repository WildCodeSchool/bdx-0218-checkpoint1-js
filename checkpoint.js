const bulletin = {
	nomPartie: 'Partie 1',
	notes: [],
	points: 0,
	eliminer: false,
	moyenne: 0
};

// Exercice 2 : Ajouter 10 notes comprises entre 0 et 20, obtenues aléatoirement avec `Math.random()`, dans le tableau `notes`.
addNotes = (obj) => {
	for (let i = 0; i < 10; i++) {
		bulletin.notes.push(Math.round(Math.random() * 21))
	}
}
addNotes(bulletin)

// Exercice 3 : Modifier la propriété `points` qui sera le nombre de points sachant qu’un point est égal à une note supérieure à 10.
addPoints = (obj) => {
	for (let i = 0; i < bulletin.notes.length; i++) {
		if (bulletin.notes[i] > 10) {
			bulletin.points += 1
		}
	}
}
addPoints(bulletin)

// Exercice 4 : Modifier la propriété `eliminer` si une des notes est égale à 0.
eliminerEtudiant = (obj) => {
	for (let i = 0; i < bulletin.notes.length; i++) {
		if (bulletin.notes[i] === 0) {
			bulletin.eliminer = true
			return
		}
	}
}
eliminerEtudiant(bulletin)

// Exercice 5 : Modifier la propriété `moyenne` pour calculer la moyenne des notes.
calculMoyenne = (obj) => {
	let total = 0
	for (let i = 0; i < bulletin.notes.length; i++) {
		total = total + bulletin.notes[i]
	}
	let moyenne = total / 10
}
calculMoyenne(bulletin)

console.log(bulletin);
// Complete le bulletin
// Your code here... :)

// Don't touch this...
module.export = bulletin;
