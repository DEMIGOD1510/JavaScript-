// rest parameters = (...rest) allow a function work with a variable 
//                    numbers of arguments by bundling them into an array

//                    spread = expends an array into seperate elements 
//                    rest = bundles seperate elements into an array

// function openFridge(...foods){
//   console.log(...foods);
// }
// function getFood(...foods){
//   return foods;
// }

// const food1 = "pizza";
// const food2 = "burger";
// const food3 = "sushi";
// const food4 = "ice-cream";
// const food5 = "meat";

// // openFridge(food1, food2, food3, food4, food5)

// const foods = getFood(food1, food2, food3, food4, food5);

// console.log(foods);


// function sum(...numbers){

//   let result = 0;
//   for(let number of numbers){
//     result += number;
//   } 
//   return result;
// }

// const total = sum(1, 2, 3, 4, 5);

// console.log(`Your total is $${total}`);



// function sum(...numbers){

//   let result = 0;
//   for(let number of numbers){
//     result += number;
//   } 
//   return result;
// }

// function getAverage(...numbers){

//   let result = 0;
//   for(let number of numbers){
//     result += number;
//   } 
//   return result / numbers.length;
// }

// const total = getAverage(75, 100, 85, 90, 50);

// console.log(total);


function combineStrings(...strings){
  return strings.join(" ");
}


const fullName = combineStrings("Mr.", "Ankit", "Singh", "III")

console.log(fullName);





