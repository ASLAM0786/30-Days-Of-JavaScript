//*Understanding Promises
// const promises = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const success = false; //* This can be the result of some async operation
//     if (success) {
//       resolve("First promise resolved"); //* Fulfill the promise
//     } else {
//       reject("First promise failed"); //* Reject the promise
//     }
//   }, 2000);
// });

// promises
//   .then((result) => {
//     console.log(result); // 'First promise succeeded'
//   })
//   .catch((error) => {
//     console.error(error); // 'First promise failed'
//   })
//   .finally(() => {
//     console.log("Promise has been settled");
//   });

//* Chaining promises

// promises
//   .then((result) => {
//     console.log(result); // 'First promise resolved'
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve("Second promise resolved");
//       }, 1000);
//     });
//   })
//   .then((result) => {
//     console.log(result); //? 'Second promise resolved'
//   })
//   .catch((error) => {
//     console.error(error);
//   });

//* Async and await
// async function checkAccepted() {
//   console.log("Check:::.......Started");
//   await promises.then((result) => {
//     console.log(result);
//   });
//   console.log("Check:::.......End");
// }

//checkAccepted();
function fetchPromises() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = false; //* This can be the result of some async operation
      if (success) {
        resolve("First promise resolved"); //* Fulfill the promise
      } else {
        reject("First promise failed"); //* Reject the promise
      }
    }, 2000);
  });
}
async function checkRejected() {
  try {
    const res = await fetchPromises();
    console.log(res);
  } catch (error) {
    console.log("Catch: " + error);
  }
}

//checkRejected();

//* Fetching data from public API
async function publicAnimalData() {
  const url = "https://dogapi.dog/api/v2/breeds";
  const options = {
    method: "GET",
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

//publicAnimalData();

// fetch("https://dogapi.dog/api/v2/breeds")
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error("Network response was not ok " + response.statusText);
//     }
//     return response.json(); //* Parse JSON data
//   })
//   .then((data) => {
//     console.log(data); //* Handle the data
//   })
//   .catch((error) => {
//     console.error("There has been a problem with your fetch operation:", error);
//   });

// fetch("https://jsonplaceholder.typicode.com/posts")
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

const promise1 = new Promise((resolve) => setTimeout(resolve, 1000, "one"));
// const promise2 = new Promise((resolve) => setTimeout(resolve, 2000, "two"));
const promise2 = new Promise((_, reject) =>
  setTimeout(reject, 2000, "two rejected")
);
const promise3 = new Promise((resolve) => setTimeout(resolve, 3000, "three"));

Promise.all([promise1, promise2, promise3])
  .then((values) => {
    console.log("Promise.all values:", values);
  })
  .catch((error) => {
    console.error("Promise.all error:", error); // 'two rejected'
  });

Promise.race([promise1, promise2, promise3])
  .then((value) => {
    console.log("Promise.race value:", value); // 'one'
  })
  .catch((error) => {
    console.error("Promise.race error:", error);
  });
