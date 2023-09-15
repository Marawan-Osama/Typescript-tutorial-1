"use strict";
let username = 'Maro';
console.log(username);
let a = 1;
let b = "16";
let c = true;
let myTuple = ["Maro", 16, true];
let exampleObject = {
    name: "Maro",
    required: true,
    ref: "User",
    enum: ["Maro", "Marek", "Marian"],
    match: [/regex/, "Please input correct email"]
};
let me = {
    age: 16,
    isAlive: true
};
const greetMe = (guitarist) => {
    if (guitarist.name) {
        return console.log(`Hello ${guitarist.name.toUpperCase()}`);
    }
    return console.log(`You gotta have a name for me to greet you!`);
};
greetMe(me);
