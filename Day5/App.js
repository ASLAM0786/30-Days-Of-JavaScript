function oddOrEven(num) {
  return num % 2 == 0 ? "Even" : "Odd";
}
// console.log(oddOrEven(3));

function square(num) {
  return num * num;
}
// console.log(square(4));

function maximum(num1, num2) {
  return num1 >= num2 ? num1 : num2;
}
// console.log(maximum(4, 11));

function concatenateString(string1, string2) {
  return string1 + string2;
}
// console.log(concatenateString("Aslam", "Ansari"));

sum = (num1, num2) => {
  return num1 + num2;
};
// console.log(sum(1, 2));

isCharacterExits = (val) => {
  return val.includes("a");
};
// console.log(isCharacterExits("aslam"));

function multiply(val1, val2 = 4) {
  return val1 * val2;
}
// console.log(multiply(1, 2));
// console.log(multiply(2));

function greet(name, age = 21) {
  return `Hello ${name} , Your Age is ${age}`;
}
// console.log(greet("Aslam Ansari", 27));
// console.log(greet("Afrin Khatoon"));

function highOrderFun1(fun, num) {
  while (num--) {
    fun();
  }
}

function fun() {
  console.log("Fun called");
}

//highOrderFun1(fun, 2);

function highOrderFun2(fun1, fun2, val) {
  const firstResult = fun1(val);
  const finalResult = fun2(firstResult);
  return finalResult;
}
function fun1(x) {
  return x * x;
}
function fun2(x) {
  return x + 10;
}
const result = highOrderFun2(fun1, fun2, 5);
console.log(result);
