//* template literals
const book = {
  title: "LLD",
  author: "Aslam",
  year: 1996,
};
// console.log(`Hello , I am Learning ${book.title} from Year:${book.year}`);
console.log(`string text line 1
string text line 2`);

//*destructuring
const arr = [1, 2, 3, 4];
const [firstElement, secondElement] = arr;
// console.log(firstElement, secondElement);

const { title, author } = book;
// console.log(title, author);

//* Spread  operator
const arr2 = [0, ...arr, 4];
// console.log(arr2);

//* Rest operator
function sum(...numbers) {
  return numbers.reduce((total, number) => total + number, 0);
}
// console.log(sum(1, 2, 3));

//* Default parameter
function multiply(val1, val2 = 1) {
  return val1 * val2;
}
// console.log(multiply(2));

//*Enhanced object literal
const firstName = "Jane";
const lastName = "Doe";
const dynamicProp = "email";

const person = {
  firstName,
  lastName,
  [dynamicProp]: "jane.doe@example.com",
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  updateEmail(newEmail) {
    this[dynamicProp] = newEmail;
  },
};

console.log(person.fullName()); // Output: Jane Doe
console.log(person.email); // Output: jane.doe@example.com
person.updateEmail("new.email@example.com");
console.log(person.email); // Output: new.email@example.com
