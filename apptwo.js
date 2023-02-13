// //var, const, let
// //var and let variable types allow you to change
// var someGuy = "john Doe";

// console.log(someGuy);
// someGuy = "Steve Smith";
// console.log(someGuy);

// //Init variable
// var greeting;
// console.log(greeting);
// greeting = "Hello";
// console.log(greeting);

// //Rules and conventions: var names allow numbers, letters, _, $
// //Do not begin with a number

// var $name = "John"; //really only see this in jQuery;
// var _name = "John"; //really only use this for constant variables

// //multi word vars
// var firstName = "John"; //Camelcase
// var first_name = "sara"; //see this mostly with php
// var FirstName = "Tom"; // Pascal case used for classes and constructors

// //let and const
// let someGuy
// console.log(someGuy);
// someGuy = "Steve Smith";
// console.log(someGuy);

//const can't be reassigned

const someGuy = "John";
console.log(someGuy);
//throws error
//someGuy = "Sara";

//have to assign variable - can't just declare:

//const greeting;

//non-primitive data types
//like an object
const person = {
    name: "John",
    age: 30
}

console.log(person);
//we can mutate the objects attrbutes but not the type of object (in this case the object is type person)
person.name = "sara";

console.log(person);

//arrays:

const numbers = [1, 2, 3];
//can't change the array you can only mutate it
numbers.push(6);
console.log(numbers);
//cant do this:
//numbers = [3, 5, 6];











