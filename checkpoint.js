const bulletin = {
  partyName: 'Partie 1',
  grades: [],
  points: 0,
  eliminate: false,
  average: false,
  reset: function() {
    this.partyName = 'Partie 1';
    this.grades = [];
    this.points = 0;
    this.eliminate = false;
    this.average = false;
  }
};

// Complete le bulletin

for (let i = 0; i < 10; i++) {
  bulletin.grades.push(
    Math.floor(Math.random() * 20)
  );
}

for (let i = 0; i < bulletin.grades.length; i++) {
  const grade = bulletin.grades[i];
  if (grade > 10) {
    bulletin.points++;
  }
}

for (let i = 0; i < bulletin.grades.length; i++) {
  const grade = bulletin.grades[i];
  if (grade === 0) {
    bulletin.eliminate = true;
  }
}

let sum = 0;
for (let i = 0; i < bulletin.grades.length; i++) {
  const grade = bulletin.grades[i];
  sum += grade;
}

bulletin.average = sum / bulletin.grades.length;

bulletin.reset();

// Don't touch this...
module.export = bulletin;
