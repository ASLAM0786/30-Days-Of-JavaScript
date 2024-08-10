document.addEventListener("DOMContentLoaded", (event) => {
  // Get the form and input elements
  const form = document.getElementById("userForm");
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const displayName = document.getElementById("displayName");
  const displayEmail = document.getElementById("displayEmail");

  // Load saved data when the page loads
  // function loadSavedData() {
  //   const savedName = localStorage.getItem("name");
  //   const savedEmail = localStorage.getItem("email");

  //   if (savedName && savedEmail) {
  //     displayName.textContent = `Name: ${savedName}`;
  //     displayEmail.textContent = `Email: ${savedEmail}`;
  //   } else {
  //     displayName.textContent = "Name: Not available";
  //     displayEmail.textContent = "Email: Not available";
  //   }
  // }
  function loadSavedData() {
    const savedName = sessionStorage.getItem("name");
    const savedEmail = sessionStorage.getItem("email");

    if (savedName && savedEmail) {
      displayName.textContent = `Name: ${savedName}`;
      displayEmail.textContent = `Email: ${savedEmail}`;
    } else {
      displayName.textContent = "Name: Not available";
      displayEmail.textContent = "Email: Not available";
    }
  }
  // Call loadSavedData to populate the display area
  loadSavedData();

  // Handle form submission
  // form.addEventListener("submit", (event) => {
  //   event.preventDefault(); // Prevent form from submitting in the traditional way

  //   // Get the values from the input fields
  //   const name = nameInput.value;
  //   const email = emailInput.value;

  //   // Save the values to localStorage
  //   localStorage.setItem("name", name);
  //   localStorage.setItem("email", email);
  //   // Clear the input values
  //   nameInput.value = "";
  //   emailInput.value = "";
  //   // Update the display
  //   displayName.textContent = `Name: ${name}`;
  //   displayEmail.textContent = `Email: ${email}`;
  // });
  form.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent form from submitting in the traditional way

    // Get the values from the input fields
    const name = nameInput.value;
    const email = emailInput.value;

    // Save the values to localStorage
    sessionStorage.setItem("name", name);
    sessionStorage.setItem("email", email);
    // Clear the input values
    nameInput.value = "";
    emailInput.value = "";
    // Update the display
    displayName.textContent = `Name: ${name}`;
    displayEmail.textContent = `Email: ${email}`;
  });
});

// document.getElementById("btnClear").addEventListener("click", (event) => {
//   // Get the values from the input fields
//   //event.preventDefault();
//   const name = "";
//   const email = "";
//   // Save the values to localStorage
//   localStorage.setItem("name", name);
//   localStorage.setItem("email", email);

//   // Update the display
//   displayName.textContent = `Name: ${name}`;
//   displayEmail.textContent = `Email: ${email}`;
// });
document.getElementById("btnClear").addEventListener("click", (event) => {
  // Get the values from the input fields
  //event.preventDefault();
  const name = "";
  const email = "";
  // Save the values to localStorage
  sessionStorage.setItem("name", name);
  sessionStorage.setItem("email", email);

  // Update the display
  displayName.textContent = `Name: ${name}`;
  displayEmail.textContent = `Email: ${email}`;
});

function saveAndRetrieve(key, value) {
  // Save value to both localStorage and sessionStorage
  localStorage.setItem(key, value);
  sessionStorage.setItem(key, value);

  // Retrieve values from both storages
  const localValue = localStorage.getItem(key);
  const sessionValue = sessionStorage.getItem(key);

  // Log the values to the console
  console.log(`Value from localStorage: ${localValue}`);
  console.log(`Value from sessionStorage: ${sessionValue}`);
}
function clearAllData(key) {
  localStorage.removeItem(key);
  console.log(`Key from local storage removed: ${key}`);

  sessionStorage.removeItem(key);
  console.log(`Key from session storage removed: ${key}`);
}
// Example usage
saveAndRetrieve("exampleKey", "exampleValue");
clearAllData("exampleKey");
