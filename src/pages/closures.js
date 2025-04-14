// Closures in JavaScript
// A closure is created when a function remembers and accesses 
// variables from its lexical scope even after the outer function has finished executing.

function outerFunction(outerVar) {
    return function innerFunction(innerVar) {
        console.log(`Outer: ${outerVar}, Inner: ${innerVar}`);
    };
}

const closureExample = outerFunction("Hello");
closureExample("World"); // Output: Outer: Hello, Inner: World


// Explanation:

// innerFunction() has access to outerVar, even though outerFunction() has already finished execution.

// This is closure, where a function retains access to its parent's variables.


// Real-World Example of Closures
// Data Privacy with Closures

function counter() {
    let count = 0; // Private variable
    return {
        increment: function () {
            count++;
            console.log(count);
        },
        decrement: function () {
            count--;
            console.log(count);
        }
    };
}

const myCounter = counter();
myCounter.increment(); // 1
myCounter.increment(); // 2
myCounter.decrement(); // 1
// console.log(myCounter.count); // ❌ Undefined (count is private)


// Why is this useful?

// count is private and cannot be accessed directly from outside.

// Only increment and decrement can modify it.



// Closures in setTimeout
// Closures help preserve variables inside asynchronous operations.

// Problem: Incorrect setTimeout Without Closures

for (var i = 1; i <= 3; i++) {
    setTimeout(function () {
        console.log(i); 
    }, i * 1000);
}
// Output (after 1s, 2s, 3s): 4, 4, 4

// Why does this happen?
// var i is function-scoped, so by the time setTimeout runs, i has become 4.

// Solution: Use Closures to Capture the Correct Value

for (var i = 1; i <= 3; i++) {
    (function (num) {
        setTimeout(function () {
            console.log(num);
        }, num * 1000);
    })(i);
}
// Output: 1 (after 1s), 2 (after 2s), 3 (after 3s)

// Why does this work?

// The immediately invoked function expression (IIFE) 
// captures the correct i value at each iteration.


// Solution: Use let (Block Scope)
for (let i = 1; i <= 3; i++) {
    setTimeout(function () {
        console.log(i);
    }, i * 1000);
}
// Output: 1 (after 1s), 2 (after 2s), 3 (after 3s)

// In setTimeout, var causes issues due to function scope, use IIFE or let.



// If you used Promises instead of setTimeout, you would see different behavior:
for (var i = 0; i < 3; i++) {
    Promise.resolve().then(() => console.log(i));
}

// output : 3,3,3

// Here, Promise.then() is a microtask, so it executes before any macrotasks.

// But because var is function-scoped, all .then() callbacks reference the same i, 
// which is 3 after the loop ends.

