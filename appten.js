//Loops and iterations

for (let i = 0; i < 10; i++) {
    //console.log(i);
    if (i === 2) {
        console.log("2 is my favorite number");
        continue; //stops the loop here for i = 2 s it doesn't print this statement AND the number 2
    }
    if (i === 5) {
        console.log("stop the loop");
        break; //jumps out of the loop at i === 5
    }
    console.log(i);
}

//while loop

let j = 0;

while (j < 10) {
    console.log(j);
    j++;
}

//Do while - guaranteed to run at least once since the condition isn't tested until the end

let k = 0;

do {
    console.log(k);
    k++;
}
while (k < 10);

//Loop through an array (we don't usuually do it this way);

const cars = ["ford", "Chevy", "Honda", "Kia", "Toyota"];

for (let x = 0; x < cars.length; x++); {
    console.log(cars[x]);
}

//For each array loop(I think its like a enhanced for loop in java)

cars.forEach(function (car) {
   console.log(car);
})

//MAP method returns adifferent array

const users = [
    { id: 1, name: "john" },
    { id: 2, name: "tigey" },
    { id: 3, name: "jay dog" }
];

//create an array of just the ids of users

const ids = users.map(function (user) {
    return user.id;
})

console.log(ids);

//For in loop for objects

const user = {
    name: "Tigey",
    lastname: "T",
    age: 11
}

for (let y in user) {
    console.log(y); // y will give us just the key
    console.log('${y} : ${user[y]}'); //will print the actual object like toString
}





