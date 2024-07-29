function outerFunction(outerVariable) {
    return function innerFunction(innerVariable) {
        console.log(`Outer Variable: ${outerVariable}`);
        console.log(`Inner Variable: ${innerVariable}`);
        return outerVariable + innerVariable;
    };
}

// Create an instance of the inner function with an outer variable
const innerFunctionInstance = outerFunction(10);

// Call the inner function with an inner variable and log the result
const result = innerFunctionInstance(5);
console.log(`Result: ${result}`);

/* 
This demonstrates closures, allowing the inner function to "remember" the environment in which it was created, even after the outer function has completed execution. 
*/


function createCounter() {
    // Private counter variable
    let count = 0;

    // Function to increment the counter
    function increment() {
        count += 1;
        console.log(`Counter incremented. Current value: ${count}`);
    }

    // Function to get the current value of the counter
    function getValue() {
        return count;
    }

    // Return an object exposing the increment and getValue methods
    return {
        increment,
        getValue
    };
}
// Create an instance of the counter
const myCounter = createCounter();

// Increment the counter and log the value
myCounter.increment(); // Counter incremented. Current value: 1
console.log(`Current counter value: ${myCounter.getValue()}`); // Current counter value: 1

myCounter.increment(); // Counter incremented. Current value: 2
console.log(`Current counter value: ${myCounter.getValue()}`); // Current counter value: 2

myCounter.increment(); // Counter incremented. Current value: 3
console.log(`Current counter value: ${myCounter.getValue()}`); // Current counter value: 3




function createUniqueIdGenerator() {
    // Private counter variable
    let lastId = 0;

    // Function to generate a new unique ID
    function generateId() {
        lastId += 1;  // Increment the counter
        return `id_${lastId}`;  // Return the new ID
    }

    // Return the generateId function
    return generateId;
}

const generateUniqueId=createUniqueIdGenerator();
console.log(generateUniqueId());
console.log(generateUniqueId());
console.log(generateUniqueId());


function user(name){
    function greet(){
        console.log(`Hi, ${name}`);
    }

    return greet;
}

const usergreet=user("Alex");
usergreet();


// Closures in Loops

function createFunctionArray(size) {
    const functionsArray = [];

    for (let i = 0; i < size; i++) {
        // Use a closure to capture the current value of `i`
        functionsArray.push(function() {
            console.log(`Index: ${i}`);
        });
    }

    return functionsArray;
}

const functionArray = createFunctionArray(5);

// Call each function in the array
functionArray.forEach(func => func());





function createItemManager() {
    // Private array to store items
    const items = [];

    // Method to add an item
    function addItem(item) {
        if (!items.includes(item)) {
            items.push(item);
            console.log(`Added: ${item}`);
        } else {
            console.log(`Item ${item} already exists.`);
        }
    }

    // Method to remove an item
    function removeItem(item) {
        const index = items.indexOf(item);
        if (index !== -1) {
            items.splice(index, 1);
            console.log(`Removed: ${item}`);
        } else {
            console.log(`Item ${item} does not exist.`);
        }
    }

    // Method to list all items
    function listItems() {
        console.log('Current items:', items);
    }

    // Return an object exposing the methods
    return {
        addItem,
        removeItem,
        listItems
    };
}

const itemManager = createItemManager();

// Use the item manager methods
itemManager.addItem('Apple');      // Added: Apple
itemManager.addItem('Banana');     // Added: Banana
itemManager.listItems();          // Current items: [ 'Apple', 'Banana' ]

itemManager.addItem('Apple');      // Item Apple already exists.
itemManager.removeItem('Banana'); // Removed: Banana
itemManager.listItems();          // Current items: [ 'Apple' ]

itemManager.removeItem('Banana') // Item Banana does not exist.



// Memoization

function memoize(fn) {
    // Cache to store the results of previous computations
    const cache = new Map();

    return function(...args) {
        // Convert arguments to a string to use as a cache key
        const key = JSON.stringify(args);

        // Check if the result is already in the cache
        if (cache.has(key)) {
            console.log('Returning cached result for:', key);
            return cache.get(key);
        }

        // Compute the result and store it in the cache
        const result = fn(...args);
        cache.set(key, result);
        console.log('Computing and caching result for:', key);
        return result;
    };
}

// Example function to be memoized
function slowFunction(x, y) {
        return x + y;
}

// Create a memoized version of the slow function
const memoizedFunction = memoize(slowFunction);

// Call the memoized function with various arguments
console.log(memoizedFunction(1, 2)); // Computing and caching result for: [1,2] \n 3
console.log(memoizedFunction(1, 2)); // Returning cached result for: [1,2] \n 3
console.log(memoizedFunction(2, 3)); // Computing and caching result for: [2,3] \n 5
console.log(memoizedFunction(2, 3)); // Returning cached result for: [2,3] \n 5

