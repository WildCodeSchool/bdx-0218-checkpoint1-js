const bulletin = {
  partName: 'Partie 1',
  notes: [],
  points: 0,
  eliminate: false,
  average: false,
  reset: () => {
    bulletin.notes = [];
    bulletin.points = 0;
    bulletin.eliminate = false;
    bulletin.average = false;
  }
};

for (var i = 0; i < 10; i++) {
  bulletin.notes[i] = Number((Math.random()* 20).toFixed(2));
  if (bulletin.notes[i] > 10) {
    bulletin.points ++;
  } else if (bulletin.notes[i] == 0) {
    bulletin.eliminate = true;
  }
};

bulletin.average = (bulletin.notes.reduce((x, y) => x + y, 0)/10).toFixed(2);

// La fonction reset peut être appelée avec la commande bulletin.reset()
bulletin.reset();
console.log(bulletin);
// Complete le bulletin
// Your code here... :)

// Don't touch this...
module.export = bulletin;
