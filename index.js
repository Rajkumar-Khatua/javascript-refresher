// Hoisting in JavaScript
console.log(x);
// console.log(hoist())
// console.log(y)
//var x = 5; // Initialize x
var x = 5; // Initialize x

let y = 10; // Initialize y
console.log(y);
hoist();

function hoist() {
  console.log("Hello World!");
//   console.log(x); // Output: undefined 
  var x = 20; 
  console.log(x);
}

fun();

// let x="123";
// console.log(x+"1");
// console.log(x);

// In the above example, the function hoist is hoisted which means it is moved to the top of the code. So, even if we call the function before the actual declaration, it won’t give us an error.
