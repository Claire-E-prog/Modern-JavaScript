//object literals

//define object literals
const person = {
    firstName: "Steve",
    lastName: "Smith",
    age: 100,
    email: "steve@AOL.com",
    hobbies: ["music", "aquariums", "movies"],
    //embedded object:
    address: {
        city: "Chicago",
        state: "Illinois"
    },
    //embedded functions
    getBirthYear: function () {
        return 2023 - this.age;//calculated return value requires "this" keyword b/c we are referencing an attribute of a specific object
        //return 1923 //hard coded return value
    }
}
let val;

val = person;
//get specific value:
val = person.firstName;
//more common way
val = person["firstName"];
val = person.hobbies[1];
val = person.address["city"];

//for the function
val = person.getBirthYear();

console.log(val);

//array of objects
const people = [
    { name: "Sally", age: 30 },
    { name: "Tigey", age: 10 },
    { name: "J-Dog", age: 45 },
]

//loop through object array
for (let i = 0; i < people.length; i++) {
    console.log(people[i].name);
}