// Write a function called rotate which takes an array and a number,
// and moves each element however many spaces the number is to the right.
// For the value at the end of the array, rotate should move it back to the beginning.

function rotate(arr, num) {
	var removed = 0;

	// dont rotate anything
	if (arr.length === num) {
		return arr;
	}

	var count = num;
	while(count > 0) {
		arr.unshift(arr[arr.length - 1]);
		removed = arr.pop();
		count--;
	}
	return arr;
}


rotate([1,2,3], 1) // [3,1,2]
rotate([1,2,3], 2) // [2,3,1]
rotate([1,2,3], 3) // [1,2,3]

// Write a function called makeXOGrid which takes in two parameters, rows and columns,
// and returns an array of arrays with the number of values in each subarray equal to
// the columns parameter and the number of subarrays equal to the rows parameter.
// The values in the sub-arrays should switch between "X" and "O".


function makeXOGrid(rows, cols) {

	var grid = [];
	var subArr = [];

	for (let i = 0; i < rows; i++) {
		for (let j = 0; j < cols; j++) {
			if (j % 2 === 0) {
				subArr.push('X');
			}
			subArr.push('0');
		}
	}
	return grid.push(subArr);
}


makeXOGrid(1,4) 

/*/
[["X","O","X","O"]]
/*/

makeXOGrid(3,2) 

/*/
[["X","O"],["X","O"],["X","O"]]
/*/

makeXOGrid(3,3) 
/*/
[["X","O","X"],["O","X","O"],["X","O","X"]]
/*/