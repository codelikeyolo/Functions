// Can be properties of other objects
const firefly = {
    ShipName: "Serenity",
    Captain: "Malcolm Reynolds",
    SecondInCommand: "Zoe Washburne",
    Pilot: "Hoban 'Wash' Washburne",
}

console.log(firefly);
/*
Output: 
	{ ShipName: 'Serenity',
		Captain: 'Malcolm Reynolds',
		SecondInCommand: 'Zoe Washburne',
		Pilot: "Hoban 'Wash' Washburne" }
*/

// Assigns a new function as a property - functions as properties of an object are called Methods.
firefly.soar = function () { console.log("I am a leaf on the wind. Watch how I soar."); }

console.log(firefly);
/*
Output: 
	{ ShipName: 'Serenity',
		Captain: 'Malcolm Reynolds',
		SecondInCommand: 'Zoe Washburne',
		Pilot: "Hoban 'Wash' Washburne",
		soar: [Function] }
*/

firefly.soar();
/*
Output:
	I am a leaf on the wind. Watch how I soar.
*/
