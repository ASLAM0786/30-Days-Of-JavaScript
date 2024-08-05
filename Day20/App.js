//*LocalStorage
// Store a string value
localStorage.setItem("key", "value");

// Store an object (convert to JSON string first)
const user = { name: "Alice", age: 25 };
localStorage.setItem("user", JSON.stringify(user));

// Retrieve a string value
console.log(localStorage.getItem("key"));

// Retrieve and parse an object
const userString = localStorage.getItem("user");
console.log(JSON.parse(userString));

localStorage.removeItem("key");
localStorage.clear();
if (localStorage.getItem("key") !== null) {
  console.log("Key exists");
} else {
  console.log("Key does not exist");
}

// Function to save user preferences
function savePreferences(theme, fontSize) {
  localStorage.setItem("theme", theme);
  localStorage.setItem("fontSize", fontSize);
}

// Function to load user preferences
function loadPreferences() {
  const theme = localStorage.getItem("theme") || "light"; // Default to 'light'
  const fontSize = localStorage.getItem("fontSize") || "16px"; // Default to '16px'

  // Apply the preferences to the document
  document.body.className = theme;
  document.body.style.fontSize = fontSize;
}

// Save some preferences
savePreferences("dark", "18px");

// Load preferences (e.g., on page load)
loadPreferences();
