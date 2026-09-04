// JS Basics 2 - Operators

// Arithmetic
let a = 10, b = 3;
console.log("--- Arithmetic ---");
console.log("10 + 3 =", a + b);
console.log("10 - 3 =", a - b);
console.log("10 * 3 =", a * b);
console.log("10 / 3 =", a / b);
console.log("10 % 3 =", a % b, " (remainder)");
console.log("10 ** 2 =", a ** 2, " (power)");

// Comparison -> boolean
let x = 10, y = "10";
console.log("\n--- Comparison ---");
console.log("5 > 3           =", 5 > 3);
console.log("5 < 3           =", 5 < 3);
console.log("loose 10 == '10'=", x == y, " (compares value)");
console.log("strict 10 === '10'=", x === y, " (compares type too)");
console.log("10 != 20        =", x != 20);
console.log("10 >= 10        =", x >= 10);

// Logical
console.log("\n--- Logical ---");
console.log("true && false =", true && false);
console.log("true || false =", true || false);
console.log("!true         =", !true);

// String concatenation
const concat = "Hello " + "World".toUpperCase();
console.log("\n--- String Concat ---");
console.log(concat);
