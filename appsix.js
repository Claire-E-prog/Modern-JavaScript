//Arrays
//make a new array
const numbers = [1, 3, 4, 43, 22, 16, 36, 5];
//make anew array using array object constructor
const nums2 = new Array(45, 23, 7, 13, 24, 56);

const fruits = ["apple", "bananna", "orange", "pear"];

//we can have aarays with mixed data types: [string,integer,boolean,object,undefined,null,date]

const mixed = ["Apple", 5, false, { a: 1, b: 1 }, undefined, null, new Date()];

console.log(mixed);

let val;

//Array length
val = numbers.length;
//check to see if something is an array (uses array object)
val = Array.isArray(numbers);
//get a single value from an array 
val = numbers[3];
//insert element into an array
numbers[2] = 100;
//find index of a value
val = numbers.indexOf(16);
//mutating arrays with methods
//add element to end
numbers.push(250);
//add element to front
numbers.unshift(89);
//remove from end(removed 250)
numbers.pop();
//remove from front
numbers.shift();
//Splice element (range of indices)
numbers.splice(1, 2);
//reverse
numbers.reverse();
//concatenate
val = numbers.concat(nums2);
//sort (alphabetical for strings, numbers requires comparable())
val = fruits.sort()
//comparable function is defined and called at the same time
val = numbers.sort(function (a, b) {
    return (a - b); //ascending - for descending do b-a
})

//find
function underFifty(num) {
    return num < 50;
}

//val = numbers.find(underFifty());

console.log(numbers);
console.log(val);