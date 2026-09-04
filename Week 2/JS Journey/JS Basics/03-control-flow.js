// JS Basics 3 - Control Flow

// if / else if / else
let grade = 75;
let verdict;
if (grade >= 90) verdict = "A - Excellent";
else if (grade >= 75) verdict = "B - Good";
else if (grade >= 60) verdict = "C - Average";
else verdict = "F - Fail";
console.log("Grade", grade, "=>", verdict);

// switch
let day = 5;
let dayName;
switch (day) {
    case 1: dayName = "Monday"; break;
    case 5: dayName = "Friday"; break;
    default: dayName = "Other day";
}
console.log("Day", day, "=>", dayName);

// for loop
console.log("\n--- For Loop ---");
for (let i = 1; i <= 3; i++) {
    console.log("i =", i);
}

// while loop
console.log("\n--- While Loop ---");
let count = 0;
while (count < 2) {
    console.log("count =", count);
    count++;
}

// for...of over array
console.log("\n--- For...Of ---");
const fruits = ["apple", "mango", "pear"];
for (const fruit of fruits) {
    console.log("fruit:", fruit);
}
