console.log(bulletin);
// Complete le bulletin
// Your code here... :)
const bulletin = {
		partie : "Partie1",
		notes : [],
		points : 0,
		eliminer : false,
		moyenne : false,
		reset : () => {
			bulletin.notes = [],
			bulletin.points = 0,
			bulletin.eliminer = false,
			bulletin.moyenne = false
		}
	};

for (i = 0; i < 10; i++) {
	bulletin.notes[i] = Math.round(Math.random(1) * 20);
};


for (j = 0; j<bulletin.notes.length;j++) {
	if (bulletin.notes[j] > 10){
		bulletin.points++
	}
	else if (bulletin.notes[j]==0){
		bulletin.eliminer = true
	}
	bulletin.moyenne = 0 ;
	bulletin.moyenne = bulletin.moyenne+=bulletin.notes[j-1];
};

// Don't touch this...
module.export = bulletin;
