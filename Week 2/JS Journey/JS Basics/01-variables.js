// JS Basics 1 - Variables & Data Types

// let: value can change later
let score = 10;
score = 20;

// const: value cannot be reassigned
const playerName = "Ayaan";

// var: old style, avoid in new code
var old = "legacy";

// Data types
let age = 25;            // number
let name = "Ayaan";      // string
let isActive = true;     // boolean
let nothing = null;      // null (explicitly nothing)
let notDefined;          // undefined
let hobbies = ["code", "read", "game"]; // array
let person = { first: "Ayaan", age: 25 }; // object

// typeof tells the type
console.log("typeof score     =", typeof score);
console.log("typeof name      =", typeof name);
console.log("typeof isActive  =", typeof isActive);
console.log("typeof nothing   =", typeof nothing);
console.log("typeof notDefined=", typeof notDefined);
console.log("typeof hobbies   =", typeof hobbies);
console.log("typeof person    =", typeof person);
