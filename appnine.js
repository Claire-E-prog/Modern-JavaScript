//functions
//function declaraions

function greet() {
    //console.log("Hello");
    return "Hello";
}

console.log(greet());

function greeting(firstname, lastName) {
    return "Hello " + firstname + lastName;
}

console.log(greeting("Tigey", "Evans"));
//What if yo don't have any arguments in the function?
console.log(greeting());

//set default values in the function declaration:

function anotherGreeting(firstName = "Tigey", lastName = "Tigerson") {
    return "Hello " + firstName + " " + lastName;
}

console.log(anotherGreeting());

//override the defaults:

console.log(anotherGreeting("Claire", "Evans"));

//Function expressions: function is a variable assignment

const square = function (x) { //anonymous function (un-named) // can use default in these too
    return x * x;
}

console.log(square(3));

//IMMEDIATELY INVOCABLE FUNCTION EXPRESSIONS (IFFES)
//Declare and run a function at the same time

(function () {
    console.log("iffy ran....")
})();

//can take parameters

(function (name) {
    console.log("Hello " + name);
})("Tigey");
//Usefule for module pattern applications

//Functions inside obejects (These are called methods)
const todo = {
    add: function () {
        console.log("Add todo");
    },
    edit: function (id) {
        console.log(`Edit todo ${id}`);

    }
}

todo.add();
todo.edit(22);

