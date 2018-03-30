const bulletin = {nom_partie : 'Partie 1',
                 notes : new Array() ,
                 points : 0 ,
                 eliminer : false,
                 moyenne : false,
                 };

function add_property (){
    for (let i=0; i<10; i++){
        bulletin.notes[i] = Math.floor(Math.random()*20);
        if (bulletin.notes[i]>10){
            bulletin.points ++
        }
        else if (bulletin.notes[i]===0){
            eliminer = true;
        }
    }
};

function add_moyenne (){
    for (let j=0; j<bulletin.notes.length; j++){
        bulletin.moyenne= bulletin.moyenne+ bulletin.notes[j];
    }
    bulletin.moyenne= bulletin.moyenne/bulletin.notes.length
}
;
add_property();
add_moyenne();

bulletin.reset = false


function add_reset(){
    bulletin.reset=true;
    if (bulletin.reset=true) {
        bulletin.notes = new Array(),
        bulletin.points = 0 ,
        bulletin.eliminer = false,
        bulletin.moyenne = false
    }
};
    
console.log(bulletin);
// Complete le bulletin
// Your code here... :)

// Don't touch this...
module.export = bulletin;
