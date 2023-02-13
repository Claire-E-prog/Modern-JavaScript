//math objects
const num1 = 100;
const num2 = 50;
let val;
const str = "Hello how are you";
const tags = "web development, learn javascript, how to give up";

val = num1 + num2;
val = num1 - num2;
val = num1 * num2;
val = num1 / num2;
console.log(val);
Math.floor(3.08);
val = Math.PI;
console.log(val);

//String methods
const firstName = "Bill";
const lastName = "Smith";

val = firstName + " " + lastName;

//append to a varieable 
val = "brad";
val += "dumbass";

//Escaping (put a backslash in front)

val = "That's awesome I can't wait";

//Methods (functions have parenthesis methods do not)
val = firstName.length;
console.log(val);
val = firstName.concat(" ", lastName);
console.log(val);

//toCase()
val = firstName.toUpperCase();

console.log(val);

//indexOf();
val = firstName.indexOf("B");
console.log(val);

//charAt()
val = firstName.charAt(2);
console.log(val);

//substring()
val = firstName.substring(1, 3);
console.log(val);

//slice (will take a substirng from the end of the stirng)

val = firstName.slice(-2);
console.log(val);

//split() turns a string into an array of individual words based on spaces
val = str.split(" ");
console.log(val);
val = tags.split(",");
console.log(val);

//Replace() replace the first string argumet with the second

val = str.replace("Hello", "good day");
console.log(val);

//Includes() returns a boolean value after it searches a string for a substring
val = tags.includes("Hey");
console.log(val);

//Template Literals (ask J maybe)
const Name = "John";
const age = 30;
const job = "Developer";
const city = "Miami";

function hello() {
    return "hello";
}

// es6 template strings (can do operations, invoke functions and conditionals)
//Also ? : are ternary operators that are shorthand for "if" statements 
html = `
<ul>
<li>Name: ${Name}</li>
<li>Age: ${age}</li>
<li>Job: ${job}</li>
<li>City: ${city}</li>
<li>${2 + 2}</li>
<li>${hello()}</li>
<li>${age > 30 ? "Over thirty" : "Under 30"}</li> 
</ul>
`;
document.body.innerHTML = html;

