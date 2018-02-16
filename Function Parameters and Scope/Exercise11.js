// Make a function for add, subtract, multiply, and divide. 
// Each of these functions should accept two parameters 
// and return the sum, difference, product and quotient.

	function add(num1, num2) {

		return num1 + num2;
	}

	function subtract(num1, num2) {

		return num1 - num2;
	}

	function multiply(num1, num2) {

		return num1 * num2;
	}

	function divide(num1, num2) {

		return num1 / num2;
	}

	add(2,2); // 4
	subtract(2,2); // 0
	multiply(2,2); // 4
	divide(2,2); // 1


// Write a function called sayHello that takes in a string as a parameter.
// If the parameter passed to the function is your first name, it should return "Hello Boss",
// but if the parameter passed to the function is any other name,
// it should return the string "Hello" and the name parameter.

	function sayHello(name) {

		if (name.toLowerCase() === 'justin') {
			return 'Hello Boss';
		}
		return 'Hello ' + name;
	}


// Write a function called average which accepts an array as a parameter. 
// The function should return the average of all of the numbers in the array 
//(you can assume that the array passed to the function will contain only numbers)

	function average(arr) {
		var sum = 0;

		for (let i = 0; i < arr.length; i++) {
			sum += arr[i];
		}
		return sum / arr.length;
	}


// Write a function called createStudent, which accepts two parameters both of which are strings.
// The function should return an object with the keys firstName and lastName
// and the values should be each of the strings.

	function createStudent(firstName, lastName) {
		var name = {};

		name['firstName'] = firstName;
		name['lastName'] = lastName;
		return name;

		// return {
  //       firstName: firstName,
  //       lastName: lastName
  //   	}
	}


// Using your createStudent function, create three students and save them each in a variable.
// Then create a variable called students, which is an array that will store your three students

	var julia = createStudent('julia', 'kim');
	var tom = createStudent('tom', 'hanks');
	var ryan = createStudent('ryan', 'peterson');

	var students = [julia, tom, ryan];

// Write a function called findStudentByFirstName, which accepts one parameter, a string.
// This function should iterate through the students array you just made and if the parameter
// passed to the function is the same as one of the first name's of the students,
// the function should return true. Otherwise it should return false.
// This function should be case insensitive so that you can search successfully regardless of capitalization

	function findStudentByFirstName(name) {

		// var i = 0;
		// while (i < students.length) {
		// 	if (students[i].firstName === name.toLowerCase()) {
		// 		return true;
		// 	}
		// 	i++;
		// }
		// return false;

		for (let i = 0; i < students.length; i++) {
			if (students[i].firstName === name.toLowerCase()) {
				return true;
			}
		}
		return false;
	}


// Write a function called extractEveryThird which accepts an array as a parameter.
// The function should iterate over the array and return a new array
// with every 3rd element in the array passed to the function.

	function extractEveryThird(arr) {
		var result = [];

		// for(var i = 2; i < arr.length; i += 3){
  //       newArr.push(arr[i]);
  //   	}

		// for (let i = 1; i < arr.length; i++) {
		// 	if ((i + 1) % 3 === 0) {
		// 		result.push(arr[i]);
		// 	}
		// }

		var i = 0;
		while(i < arr.length) {
			if ((i + 1) % 3 === 0) {
				result.push(arr[i]);
			}
			i++;
		}

		return result;
	}

// Write a function called countEvensAndOdds which accepts an array as a parameter.
// This function should return an object with the count of even numbers
// and the count of odd numbers. The object returned should have the keys oddCount and evenCount.

	function countEvensAndOdds(arr) {
		var count = {};
		count.oddCount = 0;
		count.evenCount = 0;

		for (let i = 0; i < arr.length; i++) {
			if (arr[i] % 2 === 0) {
				count.evenCount += 1;
			} else {
				count.oddCount += 1;
			}
		}

		// var i = 0;
		// while(i < arr.length) {
		// 	if (arr[i] % 2 === 0) {
		// 		count.evenCount += 1;
		// 	} else {
		// 		count.oddCount += 1;
		// 	}
		// 	i++;
		// }
		return count;
	}


// In the following example, what will be printed in the console?
// Make sure you first try read this code before pasting it into the console :)

	var myVar = "Hello from global";

	function scopePractice() {
	   var myVar = "Hello from function scope";
	}

	scopePractice();
	console.log(myVar); // logs 'Hello from global'

	var tricky = "Hello from global";

	function trickyScopePractice() {
	    tricky = "Hello from function scope";
	}

	console.log(tricky); // logs 'Hello from global'


// Write a function called onlyCapitalLetters which accepts a string
// and returns a new string with only the capital letters passed to the string.

	function onlyCapitalLetters(str) {
		var letters = str.split('');
		var capital = '';

		// for (let i =  0; i < letters.length; i++) {
		// 	if (letters[i] === letters[i].toUpperCase()) {
		// 		capital += letters[i];
		// 	}
		// }

		// for(var i = 0; i < str.length; i++){
  //       	if(str[i].charCodeAt(0) < 91 && str[i].charCodeAt(0) > 64 ){
  //           	newStr += str[i];
  //       	}    
  //   	}

		var i = 0;
		while(i < letters.length) {
			if (letters[i] === letters[i].toUpperCase()) {
				capital += letters[i];
			}
			i++;
		}
		return capital;
	}


