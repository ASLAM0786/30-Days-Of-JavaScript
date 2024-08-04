// const regexp = /javascript/g; //* Use the global flag 'g' for matching all occurrences
// const str = "javascriptasjavascriptasbjavascript";

// //* Use matchAll to find all matches
// const array = [...str.matchAll(regexp)];
// console.log(array);

// const regexp = /[0-9]+/g; //* Use '+' to match one or more digits
// const str = "05acdbcdhbdhcd01425jbcs147";
// const array = [...str.matchAll(regexp)];
// console.log(array);

// const regexp = /[A-Z]+/g; // Use '+' to match one or more digits
// const str = "aslam Aslam Ansari Waarish ananan";
// const array = [...str.matchAll(regexp)];
// console.log(array);
// const regexp = /\b[A-Z][a-zA-Z]*\b/g; //* Match words starting with a capital letter
// const str = "aslam Aslam Ansari Waarish ananan";
// const array = [...str.matchAll(regexp)];
// const capitalizedWords = array.map((match) => match[0]);
// console.log(capitalizedWords);

// const phoneNumber = "+1-212-456-7890";
// const regex = /^\+1-(\d{3})-(\d{3})-(\d{4})$/;

// const match = phoneNumber.match(regex);

// if (match) {
//   const areaCode = match[1];
//   const officeCode = match[2];
//   const lineNumber = match[3];

//   console.log("Area Code:", areaCode);
//   console.log("Office Code:", officeCode);
//   console.log("Line Number:", lineNumber);
// } else {
//   console.log("Phone number does not match the expected format.");
// }

// const email = "aslam123@gmail.com";
// const regex = /^([^@]+)@([^@]+)$/;
// const match = email.match(regex);
// if (match) {
//   const username = match[1];
//   const domain = match[2];

//   console.log("Username:", username);
//   console.log("Domain:", domain);
// } else {
//   console.log("Email does not match the expected format.");
// }
// const text = "Hello world";
// const regex = /^\b\w+\b/;

// const match = text.match(regex);

// if (match) {
//   console.log("Matched word:", match[0]);
// } else {
//   console.log("No match found.");
// }

// const text = "This is a test";
// const regex = /\b\w+\b$/;

// const match = text.match(regex);

// if (match) {
//   console.log("Matched word:", match[0]);
// } else {
//   console.log("No match found.");
// }

// const password = "Example1@";
// const regex =
//   /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@!#\$%^&*()_+{}\[\]:;"'<>,.?/~`|\\]).+$/;

// if (regex.test(password)) {
//   console.log("Password is valid.");
// } else {
//   console.log("Password is invalid.");
// }

const url = "https://www.example.com/path/to/resource";
const regex =
  /^(https?:\/\/)?(www\.)?[a-zA-Z0-9-]+\.[a-zA-Z]{2,}(\/[a-zA-Z0-9#]+)*\/?$/;

if (regex.test(url)) {
  console.log("URL is valid.");
} else {
  console.log("URL is invalid.");
}
