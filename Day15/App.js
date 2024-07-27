//* Understanding the closures
function arithmetic() {
  let a = 2;
  return function sum(b) {
    return a + b;
  };
}

// const fun = arithmetic();
// console.log(fun(5));

// console.log(arithmetic()(2));

function counter() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}

const increment = counter();
// console.log(increment());
// console.log(increment());
// console.log(increment());

//* Practical Closures
function user(name) {
  return () => {
    console.log(`Hello, ${name}`);
  };
}

// user("Aslam")();
// user("Afrin")();

//*closure in loops
const functionArray = [];
for (let i = 0; i < 5; i++) {
  functionArray.push(
    (function (index) {
      return function () {
        console.log(index);
      };
    })(i)
  );
}

// functionArray[0]();
// functionArray[1]();

//*Module Pattern
const itemManager = (function () {
  // Private collection of items
  let items = [];

  // Add item to the collection
  function addItem(item) {
    items.push(item);
    console.log(`${item} added.`);
  }

  // Remove item from the collection
  function removeItem(item) {
    const index = items.indexOf(item);
    if (index > -1) {
      items.splice(index, 1);
      console.log(`${item} removed.`);
    } else {
      console.log(`${item} not found.`);
    }
  }

  // List all items in the collection
  function listItems() {
    if (items.length === 0) {
      console.log("No items in the collection.");
    } else {
      console.log("Items in the collection:");
      items.forEach((item) => console.log(item));
    }
  }

  // Return an object with the methods to interact with the items
  return {
    add: addItem,
    remove: removeItem,
    list: listItems,
  };
})();

//* Usage
// itemManager.add("item1");
// itemManager.add("item2");
// itemManager.list();
// itemManager.remove("item1");
// itemManager.list();
// itemManager.remove("item3");

//*Memoization
function memoize(fn) {
  const cache = {}; // Object to store results of previous computations

  return function (...args) {
    const key = JSON.stringify(args); // Use the arguments as the cache key

    if (cache[key]) {
      console.log("Returning cached result for:", args);
      return cache[key];
    } else {
      const result = fn(...args); // Call the original function
      cache[key] = result; // Store the result in the cache
      console.log("Computing result for:", args);
      return result;
    }
  };
}

// Example usage with a simple function
function slowFunction(num) {
  for (let i = 0; i < 1e9; i++); // Simulate a slow computation
  return num * 2;
}

const memoizedSlowFunction = memoize(slowFunction);

console.log(memoizedSlowFunction(5)); // Computes and returns 10
console.log(memoizedSlowFunction(5)); // Returns cached result 10
console.log(memoizedSlowFunction(10)); // Computes and returns 20
console.log(memoizedSlowFunction(10)); // Returns cached result 20
