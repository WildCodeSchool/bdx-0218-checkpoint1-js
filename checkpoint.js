const bulletin = {
  nom_de_la_partie: "Partie1",
  notes: [], points: 0,
  eliminer: false,
  moyenne: false,
  reset: () => {
    bulletin.nom_de_la_partie = "";
    bulletin.notes = [];
    bulletin.points = 0;
    bulletin.eliminer = false;
    bulletin.moyenne = false;
  }};

  const calcul = () => {

    for (var i = 0; i < 10; i++) {
      bulletin.notes[i] = Math.floor(Math.random() * 21);

      if (bulletin.notes[i] > 10) {
        bulletin.points++;
      }

      if (bulletin.notes[i] === 0) {
        bulletin.eliminer = true;
      }

    }

    bulletin.moyenne = (bulletin.notes.reduce((a,b) => a+b,0)/10).toFixed(2);

  }


  calcul();
  /* bulletin.reset(); */
  console.log(bulletin);


  // Don't touch this...
  module.export = bulletin;
