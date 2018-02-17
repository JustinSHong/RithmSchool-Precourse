// Part 1 - write the following functions in the descriptions below

	// difference - this function takes in two parameters
	// and returns the difference of the two;

	function difference(num1, num2) {
		return num1 - num2;
	}

	// test cases
	difference(2,2); // 0
	difference(0,2); // -2

	// product - this function takes in two parameters
	// and returns the product of the two;

	function product(num1, num2) {
		return num1 * num2;
	}

	// test cases
	product(2,2); // 4
	product(0,2); // 0

	// printDay - this function takes in one parameter (a number from 1-7)
	// and returns the day of the week (1 is Sunday, 2 is Monday, 3 is Tuesday etc.).
	// If the number is less than 1 or greater than 7, the function should return undefined;

	function printDay(num) {
		if (num < 1 || num > 7) {
			return undefined;
		} else if (num === 1) {
			return 'Sunday';
		} else if (num === 2) {
			return 'Monday';
		} else if (num === 3) {
			return 'Tuesday';
		} else if (num === 4) {
			return 'Wednesday';
		} else if (num === 5) {
			return 'Thursday';
		} else if (num === 6) {
			return 'Friday';
		} else if (num === 7) {
			return 'Saturday';
		}
	}

	function printDay(num) {
		switch(num) {
			case 1:
				return 'Sunday';
			case 2: 
				return 'Monday';
			case 3: 
				return 'Tuesday';
			case 4:
				return 'Wednesday';
			case 5:
				return 'Thursday';
			case 6: 
				return 'Friday';
			case 7:
				return 'Saturday';
			default: 
				return undefined; 
		}
	}

	function printDay(num) {
		var days = {
			1: 'Sunday',
			2: 'Monday',
			3: 'Tuesday',
			4: 'Wednesday',
			5: 'Thursday',
			6: 'Friday',
			7: 'Saturday'
		}
		return days[num];
	}

	// test cases
	printDay(4); // "Wednesday"
	printDay(41); // undefined

	// lastElement - this function takes in one parameter (an array) and returns the last value in the array.
	// It should return undefined if the array is empty.

	function lastElement(arr) {
		return arr[arr.length - 1];
	}

	// test cases
	lastElement([1,2,3,4]); // 4
	lastElement([]); // undefined

	// numberCompare - this function takes in two parameters (both numbers).
	// If the first is greater than the second, this function returns "First is greater".
	// If the second number is greater than the first, the function returns "Second is greater".
	// Otherwise the function returns "Numbers are equal"

	function numberCompare(num1, num2) {
		if (num1 > num2) {
			return 'First is greater';
		} else if (num2 > num1) {
			return 'Second is greater'
		} 
		return 'Numbers are equal';
	}

	// test cases
	numberCompare(1,1); // "Numbers are equal"
	numberCompare(2,1); // "First is greater"
	numberCompare(1,2); // "Second is greater"

	// singleLetterCount - this function takes in two parameters (two strings).
	// The first parameter should be a word and the second should be a letter.
	// The function returns the number of times that letter appears in the word.
	// The function should be case insensitive (does not matter if the input is lowercase or uppercase).
	// If the letter is not found in the word, the function should return 0.

	function singleLetterCount(word, letter) {
		// count holds number of times letter is in word
		var count = 0;
		// make func case-insensitive
		var word = word.toLowerCase();
		var letter = letter.toLowerCase();

		for (let i = 0; i < word.length; i++) {
			if (word[i] === letter) {
				count ++;
			}
		}
		return count;
	}

	// test cases
	singleLetterCount('amazing','A'); // 2
	singleLetterCount('Rithm School','o'); // 2







