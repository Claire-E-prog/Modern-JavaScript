/*
Data Types:

Primitive data types:
- stored directly in the location that the variable accesses
- stored on the stack

Reference data types:
- accessed by reference
- objects that are stored in the heap
- pointer to a location in the memory 

Primitive
decimals, floats and integers are all considered numbers
null is intentional
undefined is just a empty variable
symbols(Es6)

Reference Types (objects)
- objects
- arraya
- functions
- dates
- everything else

*/

//Primitive types

//String
const someGuy = "John Doe";
console.log(typeof someGuy);//typeof function

//number
const age = 45;
console.log(typeof age);

//boolean
const hasKids = false;
console.log(typeof hasKids);

//null
const car = null;
console.log(typeof car); // returns "object as data type" this is kinda a bug null is in fact a primitive typ

//undefined
let test;
console.log(typeof test);

//symbol
const sym = Symbol();
console.log(sym);

//Reference Types - Objects
//Array
const hobbies = ["movies", "music"];
console.log(typeof hobbies);

//object literal
const address = {
    city: "Boston",
    state: "MA"
}

console.log(typeof address);

const today = new Date();
console.log(today);
console.log(typeof today);







