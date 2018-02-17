// What does the following code output? Why?

var firstName = 'Elie';  // global scope

function displayFirstName(){
    var firstName = 'Tim'; // local scope
    return firstName;
}

displayFirstName(); // 'Tim'

	// The code outputs the string 'Tim' because the variable firstName
	// inside the function is put into memory and is undefined
	// before displayFirstName is called. When the code is executed,
	// firstName is assigned 'Tim' before being executed.

	// The global variable firstName is not used in the function since
	// a firstName variable in the function scope exists.

// What does the following code output? Why?

function displayFirstName(){
    var firstName = 'Tim'; // function scope
    return firstName;
}

displayFirstName(); // 'Tim'

console.log(firstName); // undefined

	// The function call displayFirstName(); returns the string 'Tim' but
	// console.log(firstName) return a Reference Error.

	// The reason for this is that firstName is declared and assigned
	// 'Tim' in the function scope so console.log() which is in the
	// global scope does not have access to it.

// What does the following code output? Why?

console.log(firstName); // undefined
var firstName = "Elie";

	// The code outputs undefined since firstName is put into memory
	// above the console.log() before the code is run. At this point,
	// firstName is only declared so it is undefined. Assignment occurs
	// after the console.log() where the variable is written.

	// Therefore console.log(firstName) is undefined.

// What does the following code output? Why?

console.log(firstName); // undefined
firstName = 'Elie';

	// The code outputs a Reference Error: firstName is not defined.
	// The reason for this is that firstName has not been declared
	// with the var keyword. Therefore hoisting does not apply.

// What does the following code output? Why?

function sayHi(){
    return 'Hi ' + firstName; 
    var firstName = 'Elie';
}

sayHi(); // 'Hi undefined'

	// The code outputs 'Hi undefined' because firstName is declared
	// at the top of the sayHi() function scope. However assignment
	// of the string 'Elie' occurs after the return statement so
	// firstName is undefined.

// What does the following code output? Why?

function sayHi(){
    return 'Hi ' + firstName; 
    firstName = 'Elie';
}

sayHi(); // Reference Error

	// The code outputs a Reference Error: firstName is not defined
	// because firstName was not declared with the var keyword so
	// hoisting does not apply.

// What does the following code output? Why?

sayHi() // 'Hi!'

function sayHi(){
    return 'Hi!';
}

	// The code outputs 'Hi!' since the sayHi() is a function declaration.
	// Hoisting commits all declarations into memory before code is executed
	// so having the function call before the declaration is valid.

// What does the following code output? Why?

sayHi() // Type Error

var sayHi = function(){
    return 'Hi!';
}

	// The code outputs a Type Error because the function is written
	// anonymously. Anonymous functions assigned a variable name
	// are treated just like variable values. The sayHi var is declared
	// at the top of the global scope and is given the value undefined.

	// The function call is written before sayHi is assigned so an error occurs.

