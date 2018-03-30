
const bulletin = {
	partieName: "Partie 1",
	notes: [],
	points: 0,
	eliminate: false,
	moyenne: false,
	reset: function () {
		this.partieName= "Partie 1";
		this.notes= [];
		this.points= 0;
		this.eliminer= false;
		this.moyenne= false;
	}
};

for (var i = 0; i < 10; i++) {
	bulletin.notes[i] = Math.random()*20;
}


const result = (bulletin) => {
	let sum =0;
	for (let i = 0; i < bulletin.notes.length; i++) {
		sum += bulletin.notes[i]
		if (bulletin.notes[i] > 10) {
			bulletin.points ++;
		}
		else if (bulletin.notes[i] === 0) {
			bulletin.eliminer = true;
		}
	}
	bulletin.moyenne = sum / bulletin.notes.length;
}

result(bulletin);

let init = bulletin.reset();

// Don't touch this...
module.export = bulletin;
