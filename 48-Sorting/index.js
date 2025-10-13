// sort() = method used to sort elements of an array in place.
//          Sorts elements as strings in lexicographic order, not alphabetical
//          lexicographic = (alpheabet + numbers + symbols) as strings

// let numbers = [1, 5, 4, 3, 7, 6, 9, 10, 2, 8]

// numbers.sort((a, b) => b - a);

// console.log(numbers);


const people = [{name: "Ankit", age: 54, gpa: 5.5},
                {name: "gopal", age: 44, gpa: 3.5},
                {name: "rohit", age: 34, gpa: 6.5},
                {name: "rohan", age: 24, gpa: 1.5}]

people.sort((a, b) => a.name.localeCompare(b.name));

console.log(people);


