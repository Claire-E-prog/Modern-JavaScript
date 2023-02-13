//DOM document object
//We need to talk about scope

//Global Scope
var a = 1;
let b = 2;
const c = 3;

console.log("Global Scope: ", a, b, c);

function test() {
    var a = 4;
    let b = 5;
    const c = 6;
    console.log("Function Scope: ", a, b, c);
}

test();

//Block level Scope

if (true) {
    var a = 4;
    let b = 5;
    const c = 6;
    console.log("If Scope: ", a, b, c);
}

console.log("Global Scope: ", a, b, c); //var was changed in the block - it is the only one that doesn't
//revert to global declarations

for (let a = 0; a < 10; a++){
    console.log('Loop: ${a}'); 
}

//let and const have a blocke level scope and var has a function scope
console.log("Global Scope: ", a, b, c);
//Location Object
//Window Object
