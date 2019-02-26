// They can possess properties that can be dynamically created and assigned
const film = function () {
    console.log("Blade Runner");
}

// Adds a property to the above function.
film.year = "1982";

console.log(film.year);
/*
Output:
	1982
*/