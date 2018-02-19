// Write a function called map which accepts two parameters: an array and a callback.
// The map function should return a new array with the result of each value being passed
// to the callback function.

function map(arr, callback) {
	var result = [];

	for (let i = 0; i < arr.length; i++) {
		result.push(callback(arr[i]));
	}
	return result;
}

// test
map([1,2,3,4], function(val){
    return val * 2;
}); // [2,4,6,8]

// Write a function called reject which accepts two parameters an array and a callback.
// The function should return a new array with all of the values that do not return true to the callback.

function reject(arr, callback) {
	var result = [];

	for (let i = 0; i < arr.length; i++) {
		if (callback(arr[i]) === false) {
			result.push(arr[i]);
		}
	}
	return result;
}

// test
reject([1,2,3,4], function(val){
    return val > 2;
}); // [1,2]

reject([2,3,4,5], function(val){
    return val % 2 === 0;
}); // [3,5]

