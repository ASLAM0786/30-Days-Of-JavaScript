//* Declare variables of different types
let numberVar = 42; // Number
let stringVar = "Hello, World!"; // String
let booleanVar = true; // Boolean
let objectVar = { name: "Alice" }; // Object
let arrayVar = [1, 2, 3]; // Array
let functionVar = function () {}; // Function
let undefinedVar; // Undefined
let nullVar = null; // Null
let symbolVar = Symbol("symbol"); // Symbol
let bigintVar = 12345678901234567890n; // BigInt

// Log value and type of each variable
console.log(`numberVar: value = ${numberVar}, type = ${typeof numberVar}`);
console.log(`stringVar: value = "${stringVar}", type = ${typeof stringVar}`);
console.log(`booleanVar: value = ${booleanVar}, type = ${typeof booleanVar}`);
console.log(
  `objectVar: value = ${JSON.stringify(objectVar)}, type = ${typeof objectVar}`
);
console.log(
  `arrayVar: value = ${JSON.stringify(arrayVar)}, type = ${typeof arrayVar}`
);
console.log(
  `functionVar: value = ${functionVar}, type = ${typeof functionVar}`
);
console.log(
  `undefinedVar: value = ${undefinedVar}, type = ${typeof undefinedVar}`
);
console.log(`nullVar: value = ${nullVar}, type = ${typeof nullVar}`);
console.log(
  `symbolVar: value = ${symbolVar.toString()}, type = ${typeof symbolVar}`
);
console.log(`bigintVar: value = ${bigintVar}, type = ${typeof bigintVar}`);
