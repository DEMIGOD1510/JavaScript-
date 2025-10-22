// NodeList = Static collection of Html elements by (id, class, element)
//            Can be created by using querySelectorAll()
//            Similar to an array, but no(map, filter, reduce)
//            NodeList won't update to automatically reflect changes


let button = document.querySelectorAll(".myButtons");



// ADD HTML/CSS PROPERTIES

// button.forEach(button => {
//   button.style.backgroundColor = "green";
//   button.textContent += "😊"
// });

// CLICK event listener

// button.forEach(button => {
//   button.addEventListener("click", event =>{
//     event.target.style.backgroundColor = "tomato"
//   })
// });



// MOUSEOVER + MOUSEOUT event listener

// button.forEach(button => {
//   button.addEventListener("mouseover",event => {
//     event.target.style.backgroundColor = "hsl(205, 100%, 40%)";
//   });
// });

// button.forEach(button => {
//   button.addEventListener("mouseout",event => {
//     event.target.style.backgroundColor = "hsl(205, 100%, 60%)";
//   });
// });



// ADD AN ELEMENT

// const newButton = document.createElement("button"); //STEP 1
// newButton.textContent = "Button 5"; //STEP 2
// newButton.classList = "myButtons"; 
// document.body.appendChild(newButton); //STEP 3

// button = document.querySelectorAll(".myButtons");

// console.log(button);


// REMOVE AN ELEMENT

button.forEach(button => {
  button.addEventListener("click", event => {
    event.target.remove();
    button = document.querySelectorAll(".myButtons");
    console.log(button);
  });
});




