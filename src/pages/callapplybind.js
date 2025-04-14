
// Call, apply, and bind are methods in JavaScript that allow you to change the this context of a function. Here's how they work:

// 1. call Method
// The call method invokes a function with a specified this value and allows passing arguments one by one.

function greet(greeting, punctuation) {
    console.log(greeting + ", " + this.name + punctuation);
}

const person = { name: "Vaibhav" };

greet.call(person, "Hello", "!"); // Output: Hello, Vaibhav!


// call immediately invokes the function.

// The first argument is the object to be used as this, and the remaining arguments are passed one by one.

// 2. apply Method
// The apply method is similar to call, but it takes arguments as an array instead of individual values.

greet.apply(person, ["Hi", "?"]); // Output: Hi, Vaibhav?


// apply immediately invokes the function.

// The first argument is the object to be used as this, and the second argument is an array of parameters.

// 3. bind Method
// The bind method returns a new function with the specified this value, but it does not immediately execute the function.

const greetPerson = greet.bind(person, "Hey");
greetPerson("!!"); // Output: Hey, Vaibhav!!


// bind creates a new function but does not invoke it immediately.

// It allows partial application (pre-setting arguments).



// Method	Invokes Function Immediately?	Accepts Arguments
// call	    Yes	                            Passed individually
// apply	Yes	                            Passed as an array
// bind	    No(returns a new function)      Passed individually



// Comparison Summary
// Immediate Invocation vs. Function Creation:

// call and apply immediately execute the function.

// bind returns a new function for later execution.

// Argument Passing:

// call: Pass arguments one by one.

// apply: Pass arguments as an array.

// bind: You can preset some arguments, and later, any additional arguments will be appended when the new function is called.

// Use Cases:

// call/apply: Useful for borrowing methods from one object to use in another, especially when you want immediate execution.

// bind: Handy when you need to preserve the function’s context for later use (such as in event handlers, callbacks, or when using methods that rely on a certain context).