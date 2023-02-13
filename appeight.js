//Dates and Times
let val;
//instantiate date object - if you leave it empty it will show the current date
const today = new Date();

console.log(today);

//change to adifferent date
const birthday = new Date('10-3-1938');

val = birthday;

console.log(val);

// val = today.getMonth();
// val = today.getDate();
// val = today.getDay();
// val = today.getHours();
// val = today.getMinutes();
// val = today.getSeconds();
//Can do all these with setters (setMonth(4) etc)

let value = today.getTime(); //timestamp


console.log(value);

//If statments three equal signs (evaluates value and type) (like .equals() in java); It avoids js reading the string as an int
//and correctly evaluating to "false" for not equal use ==!

let id = "100";

if (id === 100) {
    console.log("True");
} else {
    console.log("False");
}

//test to see if id is undefined
if (typeof id !== "undefined") {
    console.log(`The id is ${id}`);
} else {
    console.log("No id")
}

//Shorthand conditionals - ternary operators
console.log(id === "100" ? "correct" : "Incorrect");

//Switches another way to valiate conditions
//Works the same as if else statments
//RECMMEND USE IF THERE ARE A LOT OF CASES

const color = "blue";

switch (color) {
    case "red":
        console.log("red");
        break;
    case "blue":
        console.log("blue");
        break;
    default:
        console.log("neithee")
        
}
let day;
switch (new Date().getDay()) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 5:
        day = "Friday";
        break;
    default:
        day = "Who cares";
}
console.log(`Today is ${day}`);
