// Create a new paragraph element and add it to the body
const newParagraph = document.createElement("p");
newParagraph.innerText = "Added with Javascript!";
document.body.appendChild(newParagraph);

// Create a new image element, set attributes, and add it to the body
const newImage = document.createElement("img");
newImage.setAttribute("src", "https://picsum.photos/200");
newImage.setAttribute("alt", "A random image");
document.body.appendChild(newImage);
