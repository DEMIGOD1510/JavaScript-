// .reduce() = reduce the elements of an array
//             to a single value

// const prices = [5, 30, 10 ,45, 34, 20, 40];

// const total = prices.reduce(sum);

// console.log(`$${total.toFixed(2)}`);

// function sum(accumulator, element){
//   return accumulator + element;
// }


const grades = [75, 34, 58, 80, 90, 67];

const maximum = grades.reduce(getMax);
const minimum = grades.reduce(getMin);

console.log(minimum);

function getMax(accumulator, element){
  return Math.max(accumulator, element)
}

function getMin(accumulator, element){
  return Math.min(accumulator, element)
}




