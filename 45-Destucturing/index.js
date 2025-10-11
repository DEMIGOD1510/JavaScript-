// destucturing = extract values from arrays and objects, then
//                assign them to variables in a convenient way 
//                [] = to perform array destructuring 
//                {} = to perform object destructuring

// ----------- EXAMPLE 1 --------------
// SWAP THE VALUE OF TWO VARIABLES

// let a = 1;
// let b = 2;

// [a, b] = [b, a];

// console.log(a);
// console.log(b);

//  const colors = ["red", "green", "blue", "black", "white"];

//  [colors[0], colors[4]] = [colors[4], colors[0]];

//  console.log(colors);

// const [firstColor, secondColor, thirdColor, ...extraColors] = colors;

// console.log(firstColor);
// console.log(secondColor);
// console.log(thirdColor);
// console.log(extraColors);



//----------- EXAMPLE 2 --------------
//  EXTRACT VALUES FROM OBJECTS

// const person1 = {
//   firstName: "Ankit",
//   lastName: "Singh",
//   age: 24,
// }

// const person2 = {
//   firstName: "Rohan",
//   lastName: "Singh",
//   age: 26,
//   job: "Developer",
// }

// const {firstName, lastName, age, job="Unemployed"} = person1;

// console.log(firstName);
// console.log(lastName);
// console.log(age);
// console.log(job);

// ------------ EXAMPLE 3 --------------
// DESTRUCTURING IN FUNCTION PARAMETERS

function displayPerson({firstName, lastName, age, job="Unemployed"}) {
  console.log(`name: ${firstName} ${lastName}`);
  console.log(`age: ${age}`);
  console.log(`job: ${job}`);
}


const person1 = {
  firstName: "Ankit",
  lastName: "Singh",
  age: 24,
}

const person2 = {
  firstName: "Rohan",
  lastName: "Singh",
  age: 26,
  job: "Developer",
}

displayPerson(person2);