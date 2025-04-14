Macrotasks vs. Microtasks in JavaScript
JavaScript’s event loop processes tasks in two main queues:

Microtask Queue (Higher Priority)

Includes Promises (.then, .catch, .finally), queueMicrotask(), MutationObserver.

Microtasks run right after the synchronous code and before macrotasks.

Macrotask Queue (Lower Priority)

Includes setTimeout, setInterval, setImmediate (Node.js), and I/O operations.

These execute after the microtask queue is empty.

Where Does setTimeout Fit?
setTimeout is a macrotask, so it is added to the macrotask queue.

Microtasks always run before macrotasks, even if a macrotask (like setTimeout) has a 0ms delay.


console.log("Start");

setTimeout(() => console.log("Macrotask (setTimeout)"), 0);

Promise.resolve().then(() => console.log("Microtask (Promise)"));

console.log("End");

OUTPUT:
Start
End
Microtask (Promise)   <-- Runs first (Microtask Queue)
Macrotask (setTimeout) <-- Runs after (Macrotask Queue)


Why?

Synchronous code runs first → "Start" and "End" are printed.

Microtasks execute next → The Promise .then() runs before setTimeout.

Macrotasks execute last → The setTimeout callback finally executes.


