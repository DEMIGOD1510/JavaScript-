// JSON = (JavaScript Object Notation) data - interchange format
//        Used for exchanging data between a server and a web application
//        JSON files {key:value} OR [value1, value2, value3]

//        JSON.stringify() = concerts a JS object to a JSON string. 
//        JSON.parse() = converts a JSON string to a JS object 


// const jsonNames = `["Ankit", "rohit", "Tom", "Jerry"]`;
// const jsonPerson = `{"name": "Ankit","age" : "50","isEmployed": false,"hobbies": ["Drawing", "Gaming", "Reading"]}`;
// const jsonPeople = `[{"name": "Ankit","age" : "50","isEmployed": false},
//                  {"name": "Rohit","age" : "59","isEmployed": true},
//                  {"name": "Rohan","age" : "52","isEmployed": false},
//                  {"name": "Rahul","age" : "54","isEmployed": true}]`;

// const parsedData = JSON.parse(jsonPeople);

// console.log(parsedData);


fetch("people.json")
      .then(response => response.json())
      .then(values => values.forEach(value => console.log(value)))
      .catch(error => console.error(error));






