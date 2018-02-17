// Part 2 - write the following functions in the descriptions below

	// multipleLetterCount - this function takes in one parameter (a string) and returns an object
	// with the keys being the letters and the values being the count of the letter.



	// test cases
	multipleLetterCount("hello"); // {h:1, e: 1, l: 2, o:1}
	multipleLetterCount("person"); // {p:1, e: 1, r: 1, s:1, o:1, n:1}

	// arrayManipulation - this function should take in at most four parameters (an array, command, location, and value).
		// If the command is "remove" and the location is "end", the function should remove the last value in the array
		// and return the value removed. (In this case, the function only needs three arguments.)

		// If the command is "remove" and the location is "beginning", the function should remove the first value in the array
		// and return the value removed. (In this case, the function only needs three arguments.)

		// If the command is "add" and the location is "beginning", the function should add the value (fourth parameter) to the
		// beginning of the array and return the array.

		// If the command is "add" and the location is "end", the function should add the value (fourth parameter) to the end of
		// the array and return the array.




	// test cases
	arrayManipulation([1,2,3], "remove", "end"); // 3
	arrayManipulation([1,2,3], "remove", "beginning"); // 1
	arrayManipulation([1,2,3], "add", "beginning", 20); // [20,1,2,3]
	arrayManipulation([1,2,3], "add", "end", 30); // [1,2,3,30]

	// isPalindrome - A Palindrome is a word, phrase, number, or other sequence of characters which reads the same backward or forward.
	// This function should take in one parameter and returns true or false if it is a palindrome.
	// As a bonus, allow your function to ignore whitespace and capitalization so that isPalindrome('a man a plan a canal Panama'); returns true



	// test cases
	isPalindrome('testing'); // false
	isPalindrome('tacocat'); // true
	isPalindrome('hannah'); // true
	isPalindrome('robert'); // false
