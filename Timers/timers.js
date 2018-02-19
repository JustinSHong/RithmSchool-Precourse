// Answer the following questions:

// What is the difference between setInterval and setTimeout?

	// setInterval will run its callback function for an infinite amount of time 
	// until its timer is cleared.
	// However, setTimeout only runs its callback once

// What is the difference between using setInterval and a loop?
// Why would you want to choose one over the other?

	// setInterval allows you to create asynchronous code.

	// loops do not create asynchronous code but they can allow you
	// to immediately iterate over an iterable object.

// What is the first parameter that setInterval and setTimeout accept?

	// Both functions accept a callback function as their first parameter.

// Why is it so important to store the result of setInterval and setTimeout in a variable?

	// Its important to store the result of these functions in a variable because
	// we can use the clearTimeout and clearInterval methods on them.

	// Both methods allow you to stop the timer of setTimout and setInterval.

// What does asynchronous mean in the context of setTimeout and setInterval?

	// In this context, asynchronous refers to the execution of code
	// at a later point in time.

	// Both functions accept a time delay in milliseconds as a second parameter.
