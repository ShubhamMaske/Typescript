//Array

let numArray: number[] = [1,2,3,4,5]
let strArray: string[] = ['a', 'b', 'c', 'd']

numArray.forEach((val) => {
    console.log(val)
})


//===================================================================================================================
//tuples
/*
tuples are a special type of array that have a fixed size and a known data type for each of its elements. 
This allows you to define an array with a specific structure, ensuring type safety and predictability.

Typed Elements: Each element in the tuple has a specific type, and their positions matter.
*/

let arr: [number, string] = [1, 'hi']

let coordinates3d: [number, number, number] = [10, 20, 10]

// Example of a tuple
let user: [number, string];
user = [1, "Shubham"]; // ✅ Valid
//user = ["Shubham", 1]; // ❌ Error: Type 'string' is not assignable to type 'number'


//Tuple with Optional Elements
let product: [string, number?, boolean?];
product = ["Laptop"];             // ✅ Valid
product = ["Laptop", 25000];      // ✅ Valid
product = ["Laptop", 25000, true]; // ✅ Valid


//Tuple with Rest Elements
let scores: [string, ...number[]];
scores = ["Shubham", 90, 85, 88]; // ✅ Valid
scores = ["Shubham", 90];         // ✅ Valid


//Accessing and Modifying Tuple Elements
let userDetail: [number, string];
userDetail = [101, "Shubham"];

// Accessing elements
console.log(userDetail[0]); // Output: 101
console.log(userDetail[1]); // Output: Shubham

// Modifying elements
userDetail[0] = 102;         // ✅ Valid
userDetail[1] = "Maske";     // ✅ Valid

console.log(typeof(userDetail) == 'number')  // object

//------------------------------------------------

//Destructuring Tuples
/*
let user: [number, string] = [1, "Shubham"];
let [id, name] = user;

console.log(id);   // Output: 1
console.log(name); // Output: Shubham

*/



