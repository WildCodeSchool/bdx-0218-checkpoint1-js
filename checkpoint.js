const bulletin = {
	nom :'Partie 1',
	notes:[],
	points:0,
	eliminer:false,
	moyenne:false
};

// console.log(bulletin);
// Complete le bulletin
// Your code here... :)
const notesBull = (_arg) => {

	let notes = _arg.notes;
	let points = _arg.points;
	let elim = _arg.eliminer;
	for (var i = 0; i < 10; i++) {
		notes.push(Math.floor(Math.random() * 20));
		if (notes[i] > 10){
			points++;
		}
		if (notes[i] == 0) {
			elim = true;
		}
		_arg.points = points;
		_arg.eliminer = elim;

	}
	let tot = notes.reduce((a, b)=> a + b,0);
	_arg.moyenne = (tot / 10);

	_arg.reset = function reset(){
		return {
			current: {
				nom :'Partie 1',
				notes:[],
				points:0,
				eliminer:false,
				moyenne:false
			}
		}
	}
	
	console.log(bulletin);

}

notesBull(bulletin);

// Don't touch this...
module.export = bulletin;
