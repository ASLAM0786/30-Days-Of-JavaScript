var x = 0;
if (x > 0) {
  console.log("Positive");
} else if (x < 0) {
  console.log("Negative");
} else {
  console.log("Zero");
}

let age = 17;
if (age >= 18) {
  console.log("Eligible for Voting");
} else {
  console.log("Minor, Not Eligible for voting");
}

let number1 = 23,
  number2 = 21,
  number3 = 25;
if (number1 > number2) {
  if (number1 > number3) {
    console.log(
      `Number1: ${number1} is greater than number2:${number2} and number3:${number3}`
    );
  } else {
    console.log(
      `Number3: ${number3} is greater than number2:${number2} and number1:${number1}`
    );
  }
} else {
  if (number2 > number3) {
    console.log(
      `Number2: ${number2} is greater than number1:${number1} and number3:${number3}`
    );
  } else {
    console.log(
      `Number3: ${number3} is greater than number2:${number2} and number1:${number1}`
    );
  }
}

let day = 3;
switch (day) {
  case 1:
    console.log("Sunday");
    break;
  case 2:
    console.log("Monday");
    break;
  case 3:
    console.log("Tuesday");
    break;
  case 4:
    console.log("Wednesday");
    break;
  case 5:
    console.log("Thursday");
    break;
  case 6:
    console.log("Friday");
    break;
  case 7:
    console.log("Saturday");
    break;
  default:
    console.log("Invalid Day Number");
    break;
}

let score = 49;
switch (true) {
  case score >= 90:
    console.log("Garde: A");
    break;
  case score >= 80:
    console.log("Garde: B");
    break;
  case score >= 70:
    console.log("Garde: C");
    break;
  case score >= 50:
    console.log("Garde: D");
    break;
  case score < 50:
    console.log("Garde: F");
    break;
  default:
    console.log("Invalid Score");
    break;
}

let number = 21;
number % 2 == 0 ? console.log("Even") : console.log("Odd");

let year = 1962;
if ((year % 4 === 0) & (year % 100 !== 0) || year % 400 === 0) {
  console.log(`Year:${year} is a Leap Year`);
} else {
  console.log(`Year:${year} is not a Leap Year`);
}
