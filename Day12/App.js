//* Basic Try Catch
function check() {
  try {
    throw new Error("Error");
  } catch (error) {
    console.log(error.message);
  }
}

//check();

function divisbleByZero(x, y) {
  if (y == 0) {
    throw new Error("denominator is zero!");
  }
  return x / y;
}
// try {
//   let res = divisbleByZero(2, 0);
//   console.log(res);
// } catch (error) {
//   console.log(error.message);
// }

//* finally Block
try {
  //   let res = divisbleByZero(2, 1);
  //   console.log(res);
} catch (error) {
  console.log(error.message);
} finally {
  //console.log("EveryCase its should be executed");
}

//* Error Handling using Custom Error
class CustomError extends Error {}

function checkCustomError() {
  throw new CustomError("custom error message");
}

try {
  //checkCustomError();
} catch (error) {
  console.log(error.message);
}

function validateString(string) {
  try {
    if (!string)
      throw new CustomError("String empty, Please provide valid string");
    console.log(string);
  } catch (error) {
    console.log(error.message);
  }
}

//validateString("");

//* Error Handling in promises
// const promise = new Promise((resolve, reject) => {
//   reject("rejected");
// });

// promise
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

async function checkRejected() {
  try {
    const res = await new Promise((resolve, reject) => {
      reject("rejected");
    });
    console.log(res);
  } catch (error) {
    console.log("Catch: " + error);
  }
}

//checkRejected();

//* Error Handling in fetch
// fetch("https://jsonplaceholder.typicode1.com/posts")
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error("Network response was not ok " + response.statusText);
//     }
//     return response.json(); // Parse JSON data
//   })
//   .then((data) => {
//     console.log(data); // Handle the data
//   })
//   .catch((error) => {
//     console.error("There has been a problem with your fetch operation:", error);
//   });

async function publicAnimalData() {
  const url = "https://dogapi1.dog/api/v2/breeds/";
  const options = {
    method: "GET",
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.error(error.message);
  }
}

//publicAnimalData();
