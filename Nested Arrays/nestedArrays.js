// Part 1

// Given the following array, write a function called printEvens that console.logs all of the even numbers

var nestedArr = [[1,2,3],[4,5,6],[7,8],[9,10,11,12]];

function printEvens(arr) {

	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr[i].length; j++) {
			if (arr[i][j] % 2 === 0) {
				console.log(arr[i][j]);
			}
		}
	}
}

printEvens(nestedArr); 

// 2
// 4
// 6
// 8
// 10
// 12

// Given the following array, write a function called sumTotal returns the sum of all numbers in the array

var nestedArr = [[[1,2],[3,4]],[[5,6]]];

function sumTotal(arr) {

	var total = 0;

	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr[i].length; j++) {
			for (let k = 0; k < arr[i][j].length; k++) {
				total += arr[i][j][k];
			}
		}
	}
	return total;
}

sumTotal(nestedArr); // 21

// Given the following array, write a function called countVowels, which returns the count of all of the vowels
// in each string regardless of case. To see if a value is an array, you can not use typeof since that will
// return 'object', so one way to do this is by using the Array.isArray function.

var nestedArr = ['Elie', ['Matt', ['Tim']],['Colt',['Whisky',['Janey'], 'Tom']], 'Lorien'];
var words = [];

function sortWords(arr) {

    for (let i = 0; i < arr.length; i++) {
    	if (Array.isArray(arr[i])) {
    		// if an element in arr is an array
    		// call it again
        	sortWords(arr[i]);
    	} 
    	// push non-arrays to words
    	else {
        	words.push(arr[i]);
    	}
	}
}

function countVowels(arr) {
	var vowels = ['a', 'e', 'i', 'o','u'];
	var vowelCount = 0;

	// loop through outer array
	for (let j = 0; j < arr.length; j++) {
		// loop through each string in the array
		for (let k = 0; k < arr[j].length; k++) {
			// check if each letter is a vowel
			if (vowels.indexOf(arr[j][k].toLowerCase()) !== -1) {
				console.log(arr[j] + ' ' + arr[j][k]);	// outputs word and the vowel it came from
				vowelCount++;
        	}
		}
	}
	return vowelCount;
}

sortWords(nestedArr);
countVowels(words);


