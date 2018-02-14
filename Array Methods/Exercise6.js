// Part 1 Write the code necessary to do the following:

	// Create an empty array called arr.

		var arr = [];

	// Add your first name to the arr variable

		arr.push('Justin');
		// arr = ['Justin'];

	// Add your last name to the end of the arr variable

		arr.push('Hong');
		// arr = ['Justin', 'Hong'];

	// Add your favorite color to the beginning of the arr variable

		arr.unshift('royal blue');
		// arr = ['royal blue', 'Justin', 'Hong']

	// Remove the favorite color from the arr variable (remember this is the first value in the array - 
	// what method can you use to remove the first value in an array?)

		arr.shift();
		// arr = ['Justin', 'Hong'];

	// Create another array called arr2.

		var arr2 = [];

	// Add your favorite number to arr2

		arr2.push(7);
		// arr = [7];

	// Add the string "JavaScript" to the end of the arr2 variable

		arr2.push('JavaScript');
		// arr = [7, 'JavaScript'];

	// See if the value 42 exists in the arr2 array. Do this using the indexOf method.

		arr2.indexOf(42);
		// -1

	// What does indexOf return to you if the value passed to it can not be found in the array?

		// indexOf returns the value -1 if the search element can not be found in the given array.

	// Create a new variable called combinedArr which is the 
	// result of your arr and arr2 variables combined into one array.

		var combinedArr = arr.concat(arr2);
		// ['Justin', 'Hong', 7, 'JavaScript'];

// Part 2 - Complete the following, starting from the following array: 

	var arr = ["JavaScript", "Python", "Ruby", "Java"];

	// Return the following array: ["Python", "Ruby"].

		arr.shift();
		arr.pop();

	// Combine the array with the array ["Haskell", "Clojure"].

		var combined = arr.concat(['Haskell', 'Clojure']);

	// Return the string "JavaScript, Python, Ruby, Java".

		arr.unshift('JavaScript');
		arr.push('Java');

	// Try to explain, in your own words (or diagrams!)
	// what the difference is between passing by value vs. passing by reference.

		// Passing by value refers to the behavior of JavaScript variables being able to
		// change independently of one another. The reason for this is that when 
		// variables are reassigned they do not change the objects they were
		// assigned previously. Instead they simply point to another value.

		// Passing by reference refers to the behavior of JavaScript objects stored
		// within variables to have a reference to the same object. Therefore, changes to these
		// variables persist since the object's properties also change.









