// Part 1 - Write down what the following statements will return.
// Try to figure this out before putting the commands in the chrome console.

	2 == "2";
	// 2 == "2" evaluates to true.

	2 === 2;
	// 2 === 2 evaluates to true.

	10 % 3;
	// 10 % 3 evaluates to 1.

	10 % 3 === 1;
	// 10 % 3 === 1 evaluates to true.

	true && false;
	// true && false evaluates to false.

	false || true;
	// false || true evaluates to true.

	true || false;
	// true || false evaluates to true.

// Part 2 - Answer the following questions about this code block:

	var isLearning = true;
	if(isLearning){
	    console.log("Keep it up!");
	} else {
	    console.log("Pretty sure you are learning....");
	}

	// What should the above code console.log?

		// The above code should console.log the string "Keep it up!" 

	// Why do we not need to specify if(isLearning === true)?

		// We don't need to specify isLearning because it has
		// already been declared as a variable with a value of
		// true. if(isLearning) forces the variable into a boolean context.

	// Why does if(isLearning) work on its own?

		// if(isLearning) works on its own because isLearning
		// has a value of true which is a boolean. Furthermore,
		// Javascript expects a boolean value in if() so 
		// if(isLearning) works on its own.

	var firstVariable;
	var secondVariable = "";
	var thirdVariable = 1;
	var secretMessage = "Shh!";

	if(firstVariable){
	    console.log("first");
	} else if(firstVariable || secondVariable){
	    console.log("second");
	} else if(firstVariable || thirdVariable){
	    console.log("third");
	} else {
	    console.log("fourth");
	}

	// What should the above code console.log? Why?

		// The above code should console.log the string "third".
		// The reason for this is that elseif(firstVariable || thirdVariable) 
		// is the only statement in the if else chain to evaluate to true.

	// What is the value of firstVariable when it is initialized?

		// The value of firstVariable is undefined since it was
		// not assigned a value.

	// Is the value of firstVariable a "truthy" value? Why?

		// firstVariable is a "falsey" value because it has the
		// value of undefined.

	// Is the value of secondVariable a "truthy" value? Why?

		// secondVariable is a "falsey" value because it has a 
		// value of "", an empty string. When it is evaluated
		// in a boolean context such as !!secondVariable, it
		// evaluates to false.

	// Is the value of thirdVariable a "truthy" value? Why?

		// thirdVariable is a "truthy value" because when it is
		// evaluated in a boolean context like !!thirdVariable, it
		// evaluates to true.

// Part 3

	// Research Math.random here and write an if statement that console.log's 
	// "Over 0.5" if Math.random returns a number greater than 0.5.
	// Otherwise console.log "Under 0.5".

		if (Math.random() > 0.5) {
			console.log("Over 0.5");
		} else {
			console.log("Under 0.5");
		}

	// What is a falsey value? List all the falsey values in JavaScript.

		// A falsey value is one that evaluates to the boolean false in
		// a context where Javascript expects a boolean.

		// All the falsey value include: undefined, null, '', false, 0, NaN.




