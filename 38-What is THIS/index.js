// this = reference to the object where THIS is used 
//        (this object depends on the immediate context)
//         person.name = this.name

const person1 = {
  name: "Ankit",
  favFood: "pizza",
  sayHello: function(){console.log(`h1! I am ${this.favFood}`)},
  eat: function() {console.log(`${this.name} is eating ${this.favFood}`)}
}

const person2 = {
  name: "John",
  favFood: "sushi",
  sayHello: function(){console.log(`h1! I am ${this.favFood}`)},
  eat: function() {console.log(`${this.name} is eating ${this.favFood}`)}
}

person1.eat();
person2.eat();





