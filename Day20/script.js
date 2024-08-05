document.addEventListener("DOMContentLoaded", (event) => {
  // Get the form and input elements
  const form = document.getElementById("userForm");
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const displayName = document.getElementById("displayName");
  const displayEmail = document.getElementById("displayEmail");

  // Load saved data when the page loads
  function loadSavedData() {
    const savedName = localStorage.getItem("name");
    const savedEmail = localStorage.getItem("email");

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
  form.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent form from submitting in the traditional way

    // Get the values from the input fields
    const name = nameInput.value;
    const email = emailInput.value;

    // Save the values to localStorage
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);

    // Update the display
    displayName.textContent = `Name: ${name}`;
    displayEmail.textContent = `Email: ${email}`;
  });
});

document.getElementById("btnClear").addEventListener("click", (event) => {
  // Get the values from the input fields
  event.preventDefault();
  const name = (nameInput.value = "");
  const email = (emailInput.value = "");
  // Save the values to localStorage
  localStorage.setItem("name", name);
  localStorage.setItem("email", email);

  // Update the display
  displayName.textContent = `Name: ${name}`;
  displayEmail.textContent = `Email: ${email}`;
});
