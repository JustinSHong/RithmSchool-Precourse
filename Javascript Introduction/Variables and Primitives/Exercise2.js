// Problem 1
// create the following variables:
// name, which is a string set to your current name
// dayOfBirth, which is a number set to the day of your birth month

	var name = "Justin Hong";
	var dayOfBirth = 31;

// Problem 2
// What happens when you have multiple variables of the same name?
// Which variable takes precedence?

	var fruit = "apple";
	var fruit = "banana";

	// When you have multiple variables of the same name, the latest
	// variable takes precedence.

	console.log(fruit); 
	// logs "banana" to the console not "apple"

// Problem 3
// Write some code that prompts the user for their favorite color.
// Once the user has submiited a color, log it to the console
// with a friendly message

	var favoriteColor = prompt("What is your favorite color?");
	console.log("Wow my favorite color is also " + favoriteColor);

// Problem 4
// Create a string that contains both single quotes and double quotes

	var phrase = "Mike said 'I hate cats because they hiss' to Angela.";

// Problem 5
// What is the difference between null and undefined?

	// Undefined is a primitive value that means a variable has been declared
	// but a value has not yet been assigned.

	// Null is a primitive value that signifies no value exists. It is used as
	// an assignment value.

// Problem 6
// What is NaN in Javascript? 
// What is the typeof NaN?

	typeof(NaN); // returns "number"

	// NaN is a value representing not a number.


// Problem 7
// You can declare a variable by typing [var thing;]
// What is the value of thing?


	var thing; 

	// The value of thing is undefined.

