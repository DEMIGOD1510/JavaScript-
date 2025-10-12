// nested objects = objects inside of other objects.
//                  Allows you to represent more complex data structures.
//                  Child Object is enclosed by a Parent Object.

// const person = {
//   fullName: "Ankit Singh",
//   age: 34,
//   isStudent: true, 
//   hobbies: ["coding", "reading", "gaming"],
//   address: {
//     street: "123 Main St",
//     city: "New Delhi",
//     country: "India",
//   }
// }

// for(const peoperty in person.address){
//   console.log(person.address[peoperty]);
// }

// console.log(person.fullName);
// console.log(person.age);
// console.log(person.isStudent);
// console.log(person.hobbies[2]);
// console.log(person.address.country);

class Person{
  
  constructor(name, age, ...address){
    this.name = name;
    this.age = age;
    this.address = new Address(...address);
  }
}

class Address{
  
  constructor(street, city, country){
    this.street = street;
    this.city = city;
    this.country = country;
  }
}

const person1 = new Person("Ankit Singh", 34, "123 Main St", "New Delhi", "India");
const person2 = new Person("Rohit Singh", 32, "122 Main St", "New Delhi", "India");
const person3 = new Person("Rohan Singh", 44, "154 Main St", "New Delhi", "India");

console.log(person3.address.country);



