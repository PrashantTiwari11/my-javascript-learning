// Functions in JavaScript
// A function is a block of code designed to perform a particular task.
// Functions are executed when they are invoked.
// Functions can be defined with parameters and return values.
// Functions help in code reusability and modularity.
// Function is defined using the 'function' keyword followed by the function name and parentheses.
// function definition
/*function functionName(){
    // code to be executed
}
function functionNameWithParams(param1, param2){
    // code to be executed using param1 and param2
}
// function call
functionName();
functionNameWithParams(value1, value2);*/

function myFunction(){
    console.log("This is a simple function.");
}
myFunction(); // function call

//Arrow Functions
//Compact way of writing a function
const arrowMul=(a,b) => {
    console.log(a*b);
}
