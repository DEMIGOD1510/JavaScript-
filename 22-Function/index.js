//Function = A section of reusable code. 
//           Declare code once, use it whenever you want.
//           Call the function to execute that code.

// function happyBirhtday(username, age){
//   console.log("Happy birthday to you ");
//   console.log("Happy birthday to you ");
//   console.log(`Happy birthday dear you ${username}`);
//   console.log("Happy birthday to you ");
//   console.log(`You are ${age} years old`);
// }

// happyBirhtday("AnkitSingh", 24);
// happyBirhtday("Tom", 30);
// happyBirhtday("Jerry", 30);

function add(x, y){
  return x + y;
}
function subtract(x, y){
  return x -y;
}
function multiply(x,y) {
  return x * y;
}
function divide(x, y){
  return x / y;
}
function isEven(number){

  return number % 2 === 0 ? true: false;
  // if(number % 2 === 0){
  //   return true;
  // }
  // else{
  //   return false;
  // }
}
function isValidEmail(email){

  // if(email.includes("@")){
  //   return true;
  // }
  // else{
  //   return false;
  // }

  return email.includes("@") ? true : false;
}

console.log(isValidEmail("Ankit@gmail.com"));
console.log(isValidEmail("Ankitgmail.com"));
console.log(isValidEmail("Ankit@gmail.com"));


