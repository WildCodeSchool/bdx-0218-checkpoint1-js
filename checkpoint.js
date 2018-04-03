const bulletin = {
	name: 'Partie 1',
	notes: {},
	points: 0,
	eliminer: false,
	moyenne: false,
};

console.log(bulletin);
// Complete le bulletin
// Your code here... :)

// Ici j'utilise une fonction qui ajoute aléatoirement des notes comprises entre 0 et 20. 
// Math.random() renvoie un nombre aléatoire que je multiplie par 20

function getRandomInt(max) {

  return Math.floor(Math.random() * Math.floor(max));
}
console.log(getRandomInt(20));

// Ici je dois créer une boucle afin de répeter l'action 10 fois

function getRandomInt(max) {
for (const i=0; i<10; i++){
  return Math.floor(Math.random() * Math.floor(max));
}
}

console.log(getRandomInt(20));


// Le resultat de la fonction doit être intégrer au tableau --> bulletin.notes

getRandomInt(20).push

// Don't touch this...
module.export = bulletin;
