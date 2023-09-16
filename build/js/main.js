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
const student = {
    name: "Maro",
    age: 16,
    GPA: 4.0,
    koko: 5,
    classes: [1, 2, 3, 4, 5]
};
const logStudent = (student, key) => {
    return console.log(`Student ${key} : ${student[key]}`);
};
const logkeys = () => {
    Object.keys(student).map(key => {
        console.log(student[key]);
    });
};
logStudent(student, "koko");
logkeys();
const incomes = {
    salary: 100000,
    bonus: 20000,
    sidehustle: "1000"
};
for (const revenue in incomes) {
    console.log(incomes[revenue]);
}
