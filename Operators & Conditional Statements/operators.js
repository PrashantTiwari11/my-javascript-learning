//Arithmetic Operators
let a = 10;
let b = 5;
console.log("Addition: ", a + b); // 15
console.log("Subtraction: ", a - b); // 5
console.log("Multiplication: ", a * b); // 50
console.log("Division: ", a / b); // 2
console.log("Modulus: ", a % b); // 0
console.log("Exponentiation: ", a ** b); // 100000

//Unary Operators
let c=10;
a++;
console.log("a=", a); // 11
b--;
console.log("b=", b); // 4

// a++ is equivalent to a = a + 1 , first print then increment
//++a is first increment then print the value
// b-- is equivalent to b = b - 1 , first print then decrement
//--b is first decrement then print the value

//Assignment Operators
/* =, +=, -=, *=, /=, %=, **= */
let e = 10;
let f = 5;
 e += 9; // e = e + 9
 console.log("e=", e); // 19
 f *= 2; // f = f * 2
 console.log("f=", f); // 10
 e %= 3; // e = e % 3
 console.log("e=", e); // 1

 //Comparison Operators
 /* ==, ===, !=, !==, >, <, >=, <= */
 let x=10;
 let y=5;
 let z="10";
 console.log("x==y:" , x==y); // false
 console.log("x!=y:" , x!=y); // true
 console.log("x>y:" , x>y); // true
 console.log("x<=y:" , x<=y); // false
 console.log("x===y(strict version):" , x===y); // false
 console.log("x!==z(strict version):" , x!==z); // true
 console.log("x==z:" , x==z); // true
 console.log("x===z(strict version):" , x===z); // false

 //Logical Operators
    /* Logical AND- &&, Logical OR- ||, Logical NOT- ! */
 let p=6;
 let q=3;
 let cond1 = p > q; // true
 let cond2 = p === 6;
 console.log("cond1 && cond2: ", cond1 && cond2); // true
 console.log("cond1 || cond2: ", cond1 || cond2); // true
 console.log("!cond1: ", !cond1); // false

