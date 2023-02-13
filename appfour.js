//Type conversion (changing the data type of a variable)
let val;

//number to string
val = 5;
//output
console.log(val);
console.log(typeof val);
console.log(val.length);//length is for strings

//if we wrap val in a string length will work
val = String(5);
console.log(val);
console.log(typeof val);
console.log(val.length);

//Expressions
val = String(4 + 4);
console.log(val);
console.log(typeof val);
console.log(val.length);

//Boolean
val = String(true);
console.log(val);
console.log(typeof val);
console.log(val.length);

//Date
val = String(new Date());
console.log(val);
console.log(typeof val);
console.log(val.length);

//Array
val = String([1, 2, 3, 4]);
console.log(val);
console.log(typeof val);
console.log(val.length);

//toString() does the same thing
val = (5).toString();
val = (true).toString();

//Strings to numbers
val = "5";
console.log(val);
console.log(typeof val);
//console.log(val.toFixed()); // specifies decimals and throws error for val = "5" cuz string
//wrap val in number
val = Number("5");
console.log(val.toFixed(2)); // 2 decimal points

//boolean
val = Number(true);//Will return 1 bc true value is 1
console.log(val);

val = Number(false);//false will return 0
console.log(val);

//null
val = Number(null); // also returns 0
console.log(val);

//stirng
val = "Hello";
val = Number(val); //can't parse a sting to a number - returns Nan (not a number)
console.log(val);

//same for arrays
val = [1, 2, 3];
val = Number(val); //can't parse a array to a number - returns Nan (not a number)
console.log(val);

//parsInt()
val = parseInt(100);//parses argument as an integer
console.log(val);

val = parseInt(100.986);//parses argument as an integer
console.log(val);

//for decimals use parseFloat()
val = parseFloat(100.30);
console.log(val);
// if you want it to show two decimals use twoFixed()
val = val.toFixed(2);
console.log(val);

//JavaScript will do it for us (type coersion)

const val1 = String(5);
const val2 = 6;
const sum = val1 + val2;
console.log(sum); // java assumed that since val 1 was a string val 2 was a string 
//returned concatenated string
console.log(typeof sum);

//can change the return type back to a number
const v1 = String(5);
const v2 = 6;
const add = Number(val1 + val2);
console.log(add); // java assumed that since val 1 was a string val 2 was a string 
//returned concatenated string
console.log(typeof add);
//but still concatenated









