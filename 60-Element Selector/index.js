// Element Selector = Methods used to target and manipulate HTML elements 
//                    They allow you to select one or multiple HTMl elememts 
//                    from the DOM (Document Object Model)

// 1. document.getElementById()        //Element Or NULL
// 2. document.getElementsClassName()  //Html Collection
// 3. document.getElementByTagName()   //Html Collection
// 4. document.querySelector()         //Element Or Null
// 5. document.querySelectorAll()      //Nodelist

// const myHeading = document.getElementById("my-Heading");
// myHeading.style.backgroundColor = "yellow";
// myHeading.style.textAlign = "center";

// console.log(myHeading);


//const fruits = document.getElementsByClassName("fruits");

// fruits[2].style.backgroundColor = "yellow";

// for(let fruit of fruits){
//   fruit.style.backgroundColor = "yellow";
// }

// Array.from(fruits).forEach(fruits =>{
//   fruits.style.backgroundColor = "pink"
// });

//console.log(fruits);

// const h4Elements = document.getElementsByTagName("h4");
// const liElements = document.getElementsByTagName("li");

// Array.from(h4Elements).forEach(h4Element => {
//   h4Element.style.backgroundColor = "pink";
// });

// Array.from(liElements).forEach(liElement => {
//   liElement.style.backgroundColor = "yellow";
// });


// for(let h4Element of h4Elements){
//   h4Element.style.backgroundColor = "yellow";
// }

// for(let liElement of liElements){
//   liElement.style.backgroundColor = "pink";
// }


// const element = document.querySelector(".fruits");

// element.style.backgroundColor = "yellow";


const foods = document.querySelectorAll("li");

foods.forEach(food => {
  food.style.backgroundColor = "Yellow"
});


console.log(foods);




