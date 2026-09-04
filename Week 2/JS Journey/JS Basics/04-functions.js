// JS Basics 4 - Functions

// Function declaration (hoisted)
function greet(name) {
    return "Hello, " + name + "!";
}

// Arrow function
const add = (a, b) => a + b;

// Arrow with body
const multiply = (a, b) => {
    const product = a * b;
    return product;
};

// Default parameters
function shout(text, loud = "!!") {
    return text.toUpperCase() + loud;
}

// Anonymous function assigned to const
const square = function (n) {
    return n * n;
};

console.log("greet('Ayaan')  =", greet("Ayaan"));
console.log("add(4, 7)       =", add(4, 7));
console.log("multiply(3, 5)  =", multiply(3, 5));
console.log("shout('hey')    =", shout("hey"));
console.log("square(9)       =", square(9));
