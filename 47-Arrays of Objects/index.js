
const fruits = [{name: "apple", color: "red", calories: 95},
                {name: "orange", color: "orange", calories: 45},
                {name: "banana", color: "yellow", calories: 105},
                {name: "coconut", color: "white", calories: 195},
                {name: "pineapple", color: "yellow", calories: 25},];



// --------- forEach() --------

fruits.forEach(fruits => console.log(fruits.calories))


// ----------map() -------------

const fruitName = fruits.map(fruit => fruit.name);
const fruitColors = fruits.map(fruit => fruit.color);
const fruitCalories = fruits.map(fruit => fruit.calories);


console.log(fruitName);
console.log(fruitColors);
console.log(fruitCalories);


// ------- filter() -------

const yellowFruits = fruits.filter(fruit => fruit.color === "yellow");
const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);
const highCalFruits = fruits.filter(fruit => fruit.calories >= 100);

console.log(highCalFruits);


// --------- reduce()-------
const maxFruit = fruits.reduce((max, fruit) => fruit.calories > max.calories ? fruit : max);

const minFruit = fruits.reduce((min, fruit) => fruit.calories < min.calories ? fruit : min);

console.log(minFruit);






