class Bulletin {
	constructor(_name) {
		this.name = _name;
		this.notes = [];
		this.points = 0;
		this.eliminate = false;
		this.average = false; 
	}

	// ajouts de notes
	addNotes(_min, _max, _nbNotes) {
		for (let i = 0; i < _nbNotes; i++) {
			this.notes.push(Math.round(Math.random() * (_max - _min) + _min))
		}
	}

	// ajout de points
	addPoints() {
		// for (let i = 0; i < this.notes.length; i++) {
		// 	if (this.notes[i] > 10)
		// 		this.points++
		// }
		this.notes.map(i => i > 10 ? this.points++ : this.points)
	}

	// élimination
	isEliminate() {
		// for (let i = 0; i < this.notes.length; i++) {
		// 	if (this.notes[i] === 0)
		// 		this.eliminate = true
		// }
		this.notes.map(i => i === 0 ? this.eliminate = true : this.eliminate)
	}

	// calcul de la moyenne
	calcAverage() {
		let average = 0;
		// for (let i = 0; i < this.notes.length; i++) {
		// 	average += this.notes[i];
		// }
		this.notes.map(i => (average += i)/this.notes.length > 10 ? this.average = true : this.average);
		//average/this.notes.length > 10 ? this.average = true : this.average = false
	}

	//reset
	reset() {
		this.notes = [];
		this.points = 0;
		this.eliminate = false;
		this.average = false; 
	}
}

const checkpoint = new Bulletin('Partie 2');
checkpoint.addNotes(0, 20, 10);
checkpoint.addPoints();
checkpoint.isEliminate();
checkpoint.calcAverage();
checkpoint.reset();