const bulletin = {
	nom : "Partie 1",
	notes : [],
	points : 0,
	eliminer : false,
	moyenne : false
};

console.log(bulletin);
// Complete le bulletin
// Your code here... :)

				var randomInt =  (_low, _high) => 
					{
				    	return Math.floor(Math.random() * (_high - _low + 1) + _low);
					}

				const tab = new Array(10);

				for (let i = 0; i <tab.length; i++) 
					{
				    	tab[i] = randomInt(0,20);
					};

bulletin.notes.push(...tab);



				const addPoints = (_objectVal1, _objectVal2)=>
				{
					for (let j=0; j <_objectVal1.length; j++)
					{
						_objectVal1[j] > 10  ? _objectVal2 =_objectVal2+1  : 0;
					}
				}

 
addPoints(bulletin.notes, bulletin.points)


				const perdu  = (_objectVal1, _objectVal2)=>
				{
					for (let x=0; x <_objectVal1.length; x++)
					{
						_objectVal1[j] = 0  ? _objectVal2 = true  : false;
					}
					return _objectVal2
				}

 
perdu(bulletin.notes, bulletin.eliminer)



				const avg  = (_objectVal1, _objectVal2)=>
				{
					let sum = 0
					for (let y=0; y <_objectVal1.length; y++)
					{
						sum +=_objectVal1[j]
					}
					_objectVal2 = sum / _objectVal1.length
					return _objectVal2
				}

 
avg(bulletin.notes, bulletin.moyenne)


// Don't touch this...
module.export = bulletin;
