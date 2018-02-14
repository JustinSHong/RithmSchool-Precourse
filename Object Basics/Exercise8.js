// Create an object that has your firstName, lastName, and occupation as keys.

	var personalInfo = {
		firstName: 'Justin',
		lastName: 'Hong',
		occupation: 'student'
	}

// Access each value from your object
// using both dot notation and bracket notation.

	personalInfo.firstName;
	personalInfo[lastName];
	personalInfo.occupation;

// Add a key for hobby to your object.
// Remove the key and value for occupation.

	personalInfo[hobby] = 'reading';
	delete personalInfo.occupation;

// What is the difference between dot notation and bracket notation?

	// Dot notation is used when the object property is already known
	// and is not a variable or an expression. 

	// Bracket notation is used when a property is a string, variable,
	// or an expression.