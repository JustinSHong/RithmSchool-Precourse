// Part 1 

	// Given the following object below, write code to print the value
	// then the key to the console separated by '=>':

	var namesAndHobbies = {
    elie: "JavaScript",
    matt: "jogging",
    janey: "table building",
    tim: "sailing"
	}

	// Output should be:
	// JavaScript => elie
	// jogging => matt
	// table building => janey
	// sailing => tim

	for (name in namesAndHobbies) {
		console.log(namesAndHobbies[name] + ' ' + '=>' + ' ' + name);
	}

	// Add a key for your name, and a value for your favorite hobby
	// to the namesAndHobbies object.

	namesAndHobbies['justin'] = 'hiking';

	// Write an if statement that console.logs your name and hobby to the console
	// if the key of your name is contained in the object.

	if ('justin' in namesAndHobbies) {
		console.log('justin' + ' ' + namesAndHobbies['justin']);
	}

// Part 2 - assume you are starting with the following programming object.

	var programming = {
    languages: ["JavaScript", "Python", "Ruby"],
    isChallenging: true,
    isRewarding: true,
    difficulty: 8,
    jokes: "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
	};

	// Write the command to add the language "Go" to the end of the languages array.

	programming.languages.push('Go');

	// Change the difficulty to the value of 7.

	programming.difficulty = 7;

	// Using the delete keyword, write the command to remove the jokes key from the programming object.

	delete programming.jokes;

	// Write the command to add a new key called isFun and a value of true to the programming object.

	programming['isFun'] = true;

	// Using a loop, iterate through the languages array and console.log all of the languages.

	for (let i = 0; i < programming['languages'].length; i++) {
		console.log(programming['languages'][i]);
	}

	// Using a loop, console.log all of the keys in the programming object.

	for (keys in programming) {
		console.log(keys);
	}

	//Using a loop, console.log all of the values in the programming object.

	for (keys in programming) {
		console.log(programming[keys]);
	}