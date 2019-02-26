// Can be assigned to an array
const array_of_functions = [
    function () {
        console.log("Beam me up Scotty");
    },
    function () {
        console.log("Live Long and Prosper");
    },
    function () {
        console.log("Highly Illogical");
    }
];

array_of_functions.forEach(function (func) {
    func(); // run your functions
});
/*
Output: 
	Beam me up Scotty
	Live Long and Prosper
	Highly Illogical
*/

array_of_functions.push(function () {
    console.log("To Boldy Go Where No Man Has Gone Before");
});

array_of_functions.forEach(function (func) {
    func(); // run your functions
});
/*
*Extra function in the array
Output:
	Beam me up Scotty
	Live Long and Prosper
	Highly Illogical
	To Boldy Go Where No Man Has Gone Before
*/