function handleTextInput() {
  document.getElementById("text").innerText = "Hi";
}

const image = document.getElementById("image");
image.addEventListener("dblclick", () => {
  console.log("clicked");
  if (image.style.visibility === "hidden") {
    image.style.visibility = "visible";
  } else {
    image.style.visibility = "hidden";
  }
});

let text = document.getElementById("text");
text.addEventListener("mouseover", () => {
  text.classList.add("hover");
});

text.addEventListener("mouseout", () => {
  text.classList.remove("hover");
});

let textInput = document.getElementById("textInput");
textInput.addEventListener("keydown", (event) => {
  console.log(event.key);
});

textInput.addEventListener("keyup", (event) => {
  console.log(textInput.value);
});

document.getElementById("myform").addEventListener("submit", (event) => {
  event.preventDefault();

  // Retrieve form data
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;

  console.log("Name:", name);
  console.log("Email:", email);
});

document.getElementById("mySelect").addEventListener("change", function () {
  var selectedOption = this.value;
  document.getElementById("selectedValue").innerText =
    "Selected Value: " + selectedOption;
});

document.getElementById("myList").addEventListener("click", function (event) {
  //* Check if the clicked element is a list item
  if (event.target && event.target.nodeName === "LI") {
    console.log("Clicked item text:", event.target.textContent); //?outerText
  }
});

document
  .getElementById("parentContainer")
  .addEventListener("click", function (event) {
    if (event.target && event.target.className === "child") {
      console.log("Clicked child text:", event.target.textContent);
    }
  });

document.getElementById("addChild").addEventListener("click", function () {
  const newChild = document.createElement("div");
  newChild.className = "child";
  newChild.textContent = "I am a new child!";
  document.getElementById("parentContainer").appendChild(newChild);
});
