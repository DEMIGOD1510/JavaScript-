// DOM = DOCUMENT OBJECT MODEL
//       Object{} that represents the page you see in the web browser
//       and provides you with an API to intract with it. 
//       Web browser construsts the DOM when it loads an HTML document,
//       and structures all the elements in a tree-like representation.
//       JavaScript can acces the DOM to dynamically 
//       change the content, structure, adn sytle of a web page.


const username = "";
const welcomeMsg = document.getElementById("welcome-msg");

welcomeMsg.textContent += username === "" ? `Guest` : username;

console.dir(document);


