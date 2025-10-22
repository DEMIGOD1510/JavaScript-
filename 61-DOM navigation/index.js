// DOM Navigation = The process of navigating through the structure
//                  of an HTML document using JavaScript.

// .firstElementChild
// .lastElementChild
// .nextElementSibling
// .previousElementSibling
// .parentElement
// .children


// --------- .firstElementChild ---------

// const element = document.getElementById("desserts");
// const firstChild = element.firstElementChild;
// firstChild.style.backgroundColor = "yellow";

// const ulElement = document.querySelectorAll("ul");

// ulElement.forEach(ulElement => {
//   const firstChild = ulElement.firstElementChild;
//   firstChild.style.backgroundColor = "pink";
// });


// --------- .lastElementChild ---------

// const element = document.getElementById("fruits");
// const lastChild = element.lastElementChild;
// lastChild.style.backgroundColor = "pink";

// const ulElement = document.querySelectorAll("ul");

// ulElement.forEach(ulElement => {
//   const lastChild = ulElement.lastElementChild;
//   lastChild.style.backgroundColor = "pink";
// });


// --------- .nextElementSibling ---------

// const element = document.getElementById("vegetables");
// const nextSibling = element.nextElementSibling;
// nextSibling.style.backgroundColor = "pink";


// --------- .previousElementSibling ---------

// const element = document.getElementById("desserts");
// const prevSibling = element.previousElementSibling;
// prevSibling.style.backgroundColor = "pink";



// --------- .parentElement ---------


// const element = document.getElementById("Carrots");
// const parent = element.parentElement;
// parent.style.backgroundColor = "orange"



// --------- .children ---------

const element = document.getElementById("desserts");
const children = element.children;

Array.from(children).forEach(child => {
  child.style.backgroundColor = "orange";
});



