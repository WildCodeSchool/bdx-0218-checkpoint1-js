const bulletin = {
	nomPartie: 'Partie 1',
	notes: [],
	points: 0,
	eliminer: false,
	moyenne: false,
	// Exercice 6 : Créer une sixième propriété nommée `reset` qui sera une fonction permettant de réinitialiser toutes les propriétés.
	reset () {
		this.nomPartie = 'Partie 1',
		this.notes = [],
		this.points = 0,
		this.eliminer = false,
		this.moyenne = false
	}
};

// Exercice 2 : Ajouter 10 notes comprises entre 0 et 20, obtenues aléatoirement avec `Math.random()`, dans le tableau `notes`.
addNotes = (obj) => {
	for (let i = 0; i < 10; i++) {
		bulletin.notes.push(Math.round(Math.random() * 21))
	}
}
addNotes(bulletin);

// Exercice 3 : Modifier la propriété `points` qui sera le nombre de points sachant qu’un point est égal à une note supérieure à 10.
addPoints = (obj) => {
	for (let i = 0; i < bulletin.notes.length; i++) {
		if (bulletin.notes[i] > 10) {
			bulletin.points += 1
		}
	}
}
addPoints(bulletin);

// Exercice 4 : Modifier la propriété `eliminer` si une des notes est égale à 0.
eliminerEtudiant = (obj) => {
	for (let i = 0; i < bulletin.notes.length; i++) {
		if (bulletin.notes[i] === 0) {
			bulletin.eliminer = true
			return
		}
	}
}
eliminerEtudiant(bulletin);

// Exercice 5 : Modifier la propriété `moyenne` pour calculer la moyenne des notes.
calculMoyenne = (obj) => {
	const reducer = (accumulator, currentValue) => accumulator + currentValue
	let calcul = bulletin.notes.reduce(reducer) / bulletin.notes.length
	bulletin.moyenne = calcul
}
calculMoyenne(bulletin);

console.log(bulletin);
// Complete le bulletin
// Your code here... :)

bulletin.reset();
console.log(bulletin);

// Don't touch this...
module.export = bulletin;
