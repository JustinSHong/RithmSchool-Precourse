// Part 1 - answer the following questions

	// What is a closure?
	
		// A closure is a mechanism that allows a function to remember or recall
		// variables from an outer function that has already returned.

	//List two reasons why closures are useful

		// Closures are useful in creating private variables, which can not be
		// accessed directly.

		// Closures are also useful in creating modules, code that is encapsulated
		// and resued easily, to protect private data.

	// What is a module?

		// A module is a piece of code that is encapsulated and reused easily with
		// an IIFE.

	// What is the arguments array-like object?

		// The arguments objects holds all the parameters of a given function.

	// Why do we call arguments an array-like-object?

		// Arguments is called an array-like-object because it holds parameters
		// inside an array and has a length property. However it is not an array
		// since it can not use methods from the Array.prototype that normal arrays can.

// Part - Write a function called createCounter.
// This function should contain a variable count that is initialized to 0.
// This function should return another function that when invoked, increments the counter by 1
// and returns the count variable. You should be able to create multiple counters with
// the createCounter function and they should all have their own private variable called count.

function createCounter() {
	var count = 0;

	return function incrementCounter() {
		count++;
		return count;
	}
}

var firstCounter = createCounter();

firstCounter(); // 1
firstCounter(); // 2
firstCounter(); // 3
firstCounter(); // 4

var secondCounter = createCounter();

secondCounter(); // 1
secondCounter(); // 2
secondCounter(); // 3

firstCounter(); // 5
firstCounter(); // 6

secondCounter(); // 4