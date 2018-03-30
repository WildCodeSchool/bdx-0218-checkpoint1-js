const bulletin = {
    nomDeLaPartie : "Partie1",
    notes : [],
    points: function() {
        let points = 0
        if(this.notes.length === 0) return 0
        for (const iterator of this.notes) {
            if (iterator > 10) {
                ++points
            }
        }
        return points;
        return 'lol' ;
    },
    eliminer: function ()  {
        if (this.notes.length === 0) return false
        for (const iterator of this.notes) {
            if (iterator < 1) {
                return true;
            }
        }
        return false;
    },
    moyenne: function ()  {
        if (this.notes.length === 0) return false
        let sum = 0;
        for (const iterator of this.notes) {
            sum = iterator + sum
        }
        return sum / this.notes.length ;
    },
    reset: function () {
        this.nomDeLaPartie = "";
        this.notes = [];
    }

}


// AJOUTER 10 NOTES
for (let index = 0; index < 10; index++) {
    number = Math.random() * ((Math.floor(20)) - (Math.ceil(0) + 1) + 0)
    bulletin.notes.push(Math.ceil(number))
};

// // Don't touch this...
// module.export = bulletin;
