// Can be passed as arguments to other functions
function talk(sayFunction) {
    sayFunction();
}

talk(function () { console.log("I am Groot!") });
/*
Output:
	I am Groot!
*/