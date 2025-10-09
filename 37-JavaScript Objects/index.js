//object = A collection of related propeties and/or methods
//         Can represent real world objects (people, products, places)
//         object = (key:value, function(){})

const person1 = {
  firstName: "Ankit",
  lastName: "Singh",
  age: 25,
  isEmployed: false,
  sayHello: function(){console.log("Hi, I am Ankit Singh")},
  eat: function(){console.log("Hi I am eating food")},
}

const person2 = {
  firstName: "Rohit",
  lastName: "Singh",
  age: 30,
  isEmployed: true,
  sayHello: () => console.log("Hi, I am Rohit Singh"),
  eat: () => console.log("Hi I am eating my brother's food"),
}

person1.eat();
person2.eat();



