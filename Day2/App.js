//*Arithmetic operation
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function devide(a, b) {
  if (b == 0) throw new Error("denominator can't be zero");
  return a / b;
}

function remainder(a, b) {
  return a % b;
}

console.log(add(2, 3));
console.log(subtract(4, 2));
console.log(multiply(2, 3));
console.log(devide(4, 2));
console.log(remainder(4, 2));

//* Assignment operator
let a = 2;
a += 2;
console.log(a);
a -= 2;
console.log(a);

//*comparison operator
let b = 3;
console.log(a < b);
console.log(a > b);
console.log(a >= b);
console.log(a <= b);
console.log(a == b);
console.log(a === b);

//*Logical operator
console.log(a && b);
console.log(a || b);
console.log(!a);
console.log(a > 0 ? "Positive" : "Negative");
