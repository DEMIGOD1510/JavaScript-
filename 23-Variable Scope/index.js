// variable scpe = where a variable is recognized
//                 and accessible (local vs global)



//----- LOCAL VARIABLE -------
// Any variable decleared within stay within and can not use outside of function.
function2();

function function1(){
  let x = 1;
  console.log(x);
}

function function2(){
  let x = 2;
  console.log(x);
}

//----- GLOBAL VARIABLE --------
// Global variable can be used in multiple function
let x = 3;

function2();

function function1(){
  console.log(x);
}

function function2(){
  console.log(x);
}

