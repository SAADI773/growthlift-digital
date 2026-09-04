// JS Basics 5 - Arrays & Objects

// Arrays
let fruits = ["apple", "mango", "pear"];
fruits.push("banana");          // add to end
fruits.pop();                   // remove last
fruits.unshift("kiwi");         // add to front
fruits.shift();                 // remove first
const first = fruits[0];
const index = fruits.indexOf("mango");
const length = fruits.length;

console.log("--- Arrays ---");
console.log("fruits         =", fruits);
console.log("first          =", first);
console.log("index of mango =", index);
console.log("length         =", length);

// Array methods
const nums = [1, 2, 3, 4];
const doubled = nums.map(n => n * 2);        // transform
const evens = nums.filter(n => n % 2 === 0); // filter
const total = nums.reduce((sum, n) => sum + n, 0); // accumulate

console.log("\n--- Array Methods ---");
console.log("doubled =", doubled);
console.log("evens   =", evens);
console.log("total   =", total);

// Objects
const person = {
    first: "Ayaan",
    age: 25,
    greet() {
        return "Hi, I'm " + this.first;
    }
};
person.city = "Karachi";   // add property
delete person.age;         // remove property

console.log("\n--- Objects ---");
console.log("person.first   =", person.first);
console.log("person.city    =", person.city);
console.log("person.greet() =", person.greet());
console.log("person object  =", person);
