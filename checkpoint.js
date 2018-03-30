const bulletin = {
	nom_de_la_partie: 'Partie 1',
	notes: [],
	points:0,
	eliminer: false,
	moyenne:false,
};

var n = 0;
while ( n < 10 ) {
	n++;
	bulletin.notes.push(Math.floor(Math.random() * (21 - 0 + 1)) + 0)
		}

function nbpoints (t) {
	points=0
		if (bulletin.notes>10){
			points=points+1;
			return points;
	}
}

console.log(bulletin.notes);
console.log(nbpoints);


// console.log(points);

// console.log(entierAleatoire)

// console.log(bulletin);
// // Complete le bulletin
// // Your code here... :)

// // Don't touch this...
// module.export = bulletin;
