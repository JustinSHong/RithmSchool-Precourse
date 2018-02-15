// Write a function called myName that logs your full name. 
// Save your full name to a variable inside of the function body, 
// then use console.log to print your name to the console.

	function myName() {
		var name = 'Justin Hong';
		console.log(name);
	}

// Create an array called favoriteFoods which contains
// the strings "pizza" and "ice cream".

	var favoriteFoods = ['pizza', 'ice cream'];

// Write a function called randomFood. The function should use Math.random to randomly choose
// a favorite food in your favoriteFoods array to return. 
// For example, your function will return either pizza or ice cream,
// depending on what you get back from Math.random.

	function randomFood() {

		if (Math.random() > 0.5) {
			return 'pizza';
		} 
		return 'ice cream';
	}

// Create a variable called numbers which is an array that contains the numbers 1 through 10.

	var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Write a function called displayOddNumbers which iterates over the numbers array
// and console.logs out all of the numbers that are odd. 

	function displayOddNumbers(array) {
		for (let i = 0; i < array.length; i++) {
			if (array[i] % 2 === 1) {
				console.log(array[i]);
			}
		}
	}

// Write a function called displayEvenNumbers which iterates over the numbers array
// and console.logs out all of the numbers that are even.

	function displayEvenNumbers(array) {
		for (let i = 0; i < array.length; i++) {
			if (array[i] % 2 === 0) {
				console.log(array[i]);
			}
		}
	}

// Create a function called returnFirstOddNumber which iterates over the numbers array
// and returns the first odd number it finds

	function returnFirstOddNumber(array) {
		for (let i = 0; i < array.length; i++) {
			if (array[i] % 2 === 1) {
				return array[i];
			}
		}
	}	

// Create a function called returnFirstEvenNumber which iterates over the numbers array
// and returns the first even number it finds

	function returnFirstEvenNumber(array) {
		for (let i = 0; i < array.length; i++) {
			if (array[i] % 2 === 0) {
				return array[i];
			}
		}
	}
	

// Create a function called returnFirstHalf which returns the first half of the numbers array

	function returnFirstHalf(array) {
		// var length = array.length / 2;
		// var result = [];

		// var i = 0;
		// while(i < length) {
		// 	result.push(array[i]);
		// 	i++;
		// }
		// return result;

		return array.slice(0, numbers.length / 2);

	}
	
// Create a function called returnSecondHalf which returns the second half of the numbers array

	function returnSecondHalf(array) {
		// var length = array.length / 2;
		// var result = [];

		// for (var i = length; i < array.length; i++) {
		// 	result.push(array[i]);
		// }
		// return result;

		return numbers.slice(numbers.length / 2);
	}


