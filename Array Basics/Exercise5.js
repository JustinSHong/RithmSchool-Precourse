// Create an array of your favorite foods (call it favoriteFoods).
// Make sure it has at least three elements.

	var favoriteFoods = ['pizza', 'apple pie', 'coffee'];

// Access the second element in favoriteFoods.

	var second = favoriteFoods[1]; // 'apple pie'

// Change the last element in favoriteFoods to some other food.

	favoriteFoods[favoriteFoods.length - 1] = 'affogato';
	// ['pizza', 'apple pie', 'affogato']

// Remove the first element in favoriteFoods
// and store it in a variable called formerFavoriteFood.

	var formerFavoriteFood = favoriteFoods.shift();
	// 'pizza'

// Add a favorite food to the back of the favoriteFoods array.

	favoriteFoods.push('sushi');
	// ['apple pie', 'affogato', 'sushi']

// Add a favorite food to the front of the favoriteFoods array.

	favoriteFoods.unshift('steak');
	// ['steak', 'apple pie', 'affogato', 'sushi']


// What happens when you try to pop from an empty array?

	// pop from an empty array returns undefined.

// In the examples below,
// use splice to convert the first array to the second array:

	// [2, 3, 4, 5] -> [2, 4, 5]
	var arr = [2,3,4,5];
	arr.splice(1,1);

	// ["alpha", "gamma", "delta"] -> ["alpha", "beta", "gamma", "delta"]
	var arr = ['alpha', 'gamma', 'delta'];
	arr.splice(1, 0, 'beta');

	// [10,-10,-5,-3,2,1] -> [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
	var arr = [10,-10,-5,-3,2,1];
	arr.splice(1, arr.length - 1, 9, 8, 7, 6, 5, 4, 3, 2, 1);








