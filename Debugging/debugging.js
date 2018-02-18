// Part 1 - Answer the Following Questions:

	// What does the throw keyword do?

		// The throw keyword allows you to return an error of your choice
		// and consequently stop your code.

	// What does the finally keyword do?

		// The finally keyword executes whatever code you put in its
		// block after any try...catch block no matter what.

	// What is the difference between a TypeError and ReferenceError?

		// A TypeError occurs when JavaScript can't perform an operation on a data type.
		// A ReferenceError occurs when JavaScript can not access a variable that is out of the current scope.

	// How do you create a snippet in the Chrome dev tools?

		// Create a snippet by opening the Chrome dev tools Source tab
		// and select New Snippet. Then name your snippet and type your
		// snippet in the script box. You can also save your snippet.

	// What is an exception?

		// An exception is an error that occurs in a try..catch block.

	// How do we "catch" errors in JavaScript? Give an example with code for what that might look like.

		// You can 'catch' errors with a try...catch block. For example,

		try {
			eval('alert("Hello world)');
		}
		catch(error) {
			console.log(error);
		}

		// This try...catch statement outputs Syntax Error: Invalid or unexpected token

// Part 2 - Explain what type of error will be thrown, why the error is occuring, and how to fix it:

	// This code produces an error:
	// person; 

	var person;

	// A Reference Error is thrown since person is not defined.
	// This is fixed by declaring the variable.



	// This code produces an error:
	// var data = {};
	// data.displayInfo();

	var data = {
		displayInfo: function() {
			console.log('displayInfo is now a function');
		}
	};

	// A Type Error is thrown since the displayInfo() method is not a function.
	// Instead data.displayInfo is undefined.



	// This code produces an error:
	// var data = {};
	// data.displayInfo.foo = "bar";

	var data = {
		displayInfo: {}
	};
	data.displayInfo.foo = 'bar';

	// A Type Error is thrown since we can not assign a property foo on undefined.
	// Undefined is not an object.



	// This code produces an error:
	// function data(){
	//    	var thing = "foo";
	// }
	// data();
	// thing;

	var thing;
	function data() {
		thing = 'foo';
	}
	data();
	thing;

	// A Reference Error is thrown since thing is in the local scope of data(). 

// Part 3 - Fix the broken code and explain what was wrong:

	// original
	// for(var i = 0; i > 5; i++){
 	//    	console.log(i);
	// }

	// solution
	for(var i = 0; i < 5; i++){
    	console.log(i);
	}

	// The condition in the original code prevented the loop from running.

	// original
	// function addIfEven(num){
 	//    if(num % 2 = 0){
 	//      return num + 5;
 	//    }
 	//    return num;
	// }

	// solution
	function addIfEven(num) {
		if(num % 2 === 0) {
			return num += 5;
		}
		return num;
	}

	// The boolean expression in the if statement did not return a boolean.
	// = instead of ==== was used.

	// original
	// function loopToFive(){
 	//    for(var i=0, i < 5, i++){
 	//       console.log(i);
 	//    }
	// }

	// solution
	function loopToFive() {
		for (var i = 0; i < 5; i++) {
			console.log(i);
		}
	}

	// Syntax in the for loop was wrong. Commas instead of semi-colons were used.

	// original
	// function displayEvenNumbers(){
 	//    var numbers = [1,2,3,4,5,6,7,8];
 	//    var evenNumbers = [];
 	//    for(var i=0; i<numbers.length-1; i++;){
 	//      if(numbers % 2 = 0); {
 	//      	evenNumbers.push(i);
 	//      }
 	//      return evenNumbers;
 	//   	}
	// }

	// solution
	function displayEvenNumbers() {
		var numbers = [1,2,3,4,5,6,7,8];
		var evenNumbers = [];

		for (var i = 0; i < numbers.length; i++) {
			if (numbers[i] % 2 === 0) {
				evenNumbers.push(numbers[i]);
			}
		}
		return evenNumbers;
	}

	displayEvenNumbers(); // should return [2,4,6,8] 

	// Condition for the for loop was wrong. It prevented 8 from being pushed
	// to the evenNumbers array.

	// Boolean expression should check if numbers[i] not the numbers array is
	// divisible by 2.

	// Boolean expression in the if statement is erroneous. === not = should be used.

	// Instead of pushing i, numbers[i] should be pushed to evenNumbers.

	// Return statement should be outside the for loop.



