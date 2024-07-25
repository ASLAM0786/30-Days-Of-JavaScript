document.getElementById("name").innerText = "Aslam Ansari";

//* Add 'red' class to elements with class 'welcome'
var elements = document.getElementsByClassName("welcome");
for (var i = 0; i < elements.length; i++) {
  elements[i].classList.add("red");
}

// Create a new div element
var newDiv = document.createElement("div");

// Set the class for styling purposes (optional)
newDiv.className = "new-div";

// Create text content for the new div
var newContent = document.createTextNode("This is a new div element.");

// Append the text content to the new div
newDiv.appendChild(newContent);

// Append the new div to the body
document.body.appendChild(newDiv);

// Create a new li element
var newLi = document.createElement("li");

// Create text content for the new li
var newContent = document.createTextNode("New Item");

// Append the text content to the new li
newLi.appendChild(newContent);

// Append the new li to the existing ul list
document.getElementById("item-list").appendChild(newLi);

document.getElementById("age").remove();

//document.removeChild();

const myList = document.getElementById("item-list");
console.log(myList.lastElementChild.textContent);
myList.removeChild(myList.lastElementChild);

const image = document.getElementById("image");
image.src = "./pexels-pixabay-65894.jpg";
image.alt = "New sample";

const divElement = document.getElementsByClassName("new-div");

divElement.className = "modified-Class-Name";

const cssProperty = document.getElementById("name");
console.log(cssProperty);
cssProperty.className = "none";

function handleOnClick() {
  document.getElementById("para").innerText = "Content removed";
}

const mouseHover = document.getElementById("name");

mouseHover.addEventListener("mouseover", () => {
  mouseHover.classList.add("hovered");
});

mouseHover.addEventListener("mouseout", function () {
  mouseHover.classList.remove("hovered");
});
