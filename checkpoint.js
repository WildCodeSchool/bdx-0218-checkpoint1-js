const bulletin = {
    "name" : "Partie 1",
    "notes": [],
    "points": 0,
    "eliminer" : false,
    "moyenne": false,
    "reset" : () => {
        bulletin.name = "Nouvelle Partie ";
        bulletin.notes = [];
        bulletin.points = 0;
        bulletin.eliminer = false;
        bulletin.moyenne = false;
    }
};

/* N'ayant pas fait le checkpoint à l'école, la solution que je propose a été faite en dehors des 3h données.
Je suis resté tétu sur une solution qui ne marche pas et je ne comprends pas pourquoi. C'est pourquoi j'ai refait l'exo
de manière plus simple comme ci dessous et qui fonctionne. Si j'avais été présent à l'école, j'aurai alors posté
la solution toute à la fin (qui est annotée), mais qui ne fonctionne pas */


console.log(bulletin);


// 1
// definition d'une fonction AddNote qui push le tableau vide
// pdt 10 fois de manière aléatoire avec la fonction Math random
const addNote = (_array) => {
    for (var i = 0; i < 10; i++) {
        _array.push(Math.floor(Math.random()*21));
    }
}

addNote(bulletin.notes);
//check bulletin
console.log(bulletin);




// 2
// boucle sur le tableau créé pour mettre à jour les points avec une conditions sur le les valeurs du tableau
for (var i = 0; i < bulletin.notes.length; i++) {
    if (bulletin.notes[i] > 10){
            bulletin.points += 1;
    }
}
//check bulletin
console.log(bulletin);



// 3
// boucle sur le tableau pour mettre à jour la clé "éliminer" si et seulement si un 0 est dans le tableau
for (var i = 0; i < bulletin.notes.length; i++) {
    if (bulletin.notes[i] === 0){
        bulletin.eliminer = true;
    }
}
//check bulletin
console.log(bulletin);



// 4
// Calcul de la moyenne. Ajout d'une variable somme pour calculer la somme globale divisé par le nombre d'entité du tableau
sum = 0;
for (var i = 0; i < bulletin.notes.length; i++) {
    sum += bulletin.notes[i];
}
bulletin.moyenne = sum/bulletin.notes.length;

//check bulletin
console.log(bulletin);

bulletin.reset();

//check bulletin
console.log(bulletin);

// ------------------------------------------------------------------------------------------------------------------




/* Solution première fait dans le temps imparti. Je cherche à comprendre pourquoi ca ne marche pas.
L'objectif était de créer une fonction à chaque modif, et d'appeler les propriété de l'objet qui étaient concerné
par cette fonction


// Création d'une fonction qui va ajouter des valeurs au tableau vide
const addNote = (_array) => {
    for (var i = 0; i < 10; i++) {
        _array.push(Math.floor(Math.random()*21));
    }
}



// Fonction permettat de faire évoluer une variable, avec une condition
// Si une valeur de mon tableau nouvellement créé est supérieur à 10, alors
// le paramètre _nb augmente de 1.

const nbPoint = (_array, _nb) => {
    for (var i = 0; i < _array.length; i++) {
        if (_array[i] > 10){
            //console.log(_array[i]);
            _nb += 1;
            //console.log(_nb);
        }
    }
//console.log(_nb);
return _nb
}


// fonction pour voir si la valeur boolenne "eliminer" doit être modifié ou non selon s'il y a
// un 0 dans le tableau ou non

const isEliminate = (_array, _bool) => {
    for (var i = 0; i < _array.length; i++) {
        if (_array[i] === 0){
            _bool = true;
            return _bool;
        }
    }
}

// fonction calculant la moyenne

const average = (_array, _bool) => {
        sum = 0;
        for (var i = 0; i < _array.length; i++) {
            sum += _array[i]
            _bool = sum / _array.length
        }
        //console.log(_bool);
        return _bool;
}




addNote(bulletin.notes);
console.log(bulletin);

nbPoint(bulletin.notes, bulletin.points);
console.log(bulletin);

isEliminate(bulletin.notes, bulletin.eliminer);
console.log(bulletin);

average(bulletin.notes, bulletin.moyenne);
console.log(bulletin);

bulletin.reset();

*/
// Don't touch this...
module.export = bulletin;
