let username = 'Maro';
console.log(username);
let a: number = 1;
let b: string = "16";
let c: boolean = true;

let myTuple: [string, number, boolean] = ["Maro", 16, true];

let exampleObject: Object = {
    name:"Maro",
    required:true,
    ref:"User",
    enum:["Maro", "Marek", "Marian"],
    match:[/regex/,"Please input correct email"]
}

interface Guitarist {
    name?: string;
    age: number;
    isAlive: boolean;
}

let me: Guitarist = {
    age: 16,
    isAlive: true
}

const greetMe = (guitarist: Guitarist)=>{
    if(guitarist.name){
    return console.log(`Hello ${guitarist.name.toUpperCase()}`)
}
return console.log(`You gotta have a name for me to greet you!`)
}
greetMe(me)


// Original JS code
// const year = document.getElementById("year")
// const thisYear = new Date().getFullYear()
// year.setAttribute("datetime", thisYear)
// year.textContent = thisYear

// 1st variation: (Beginner)
// let year: HTMLElement | null
// year = document.getElementById("year")
// let thisYear: string
// thisYear = new Date().getFullYear().toString()
// if (year) {
//     year.setAttribute("datetime", thisYear)
//     year.textContent = thisYear
// }

// 2nd variation: (with Type Assertion)
// const year = document.getElementById("year") as HTMLElement
// const thisYear: string = new Date().getFullYear().toString()
// year.setAttribute("datetime", thisYear)
// year.textContent = thisYear

interface Student {
    [index:string]: string | number | number[] | undefined;
    name: string;
    age: number;
    GPA: number;
    classes?: number[];
}

const student: Student = {
    name: "Maro",
    age: 16,
    GPA: 4.0,
    koko:5,
    classes: [1,2,3,4,5]
}

const logStudent = (student:Student, key: keyof typeof student)=>{
    return console.log(`Student ${key} : ${student[key]}`)
}

//this just logs the keys of the object
const logkeys = ()=>{
    Object.keys(student).map(key=>{
        console.log(student[key])
    })
}

//logs students
logStudent(student, "koko")
logkeys()

type Incomes = Record<'salary' | 'bonus' | 'sidehustle', string| number>

const incomes: Incomes = {
    salary: 100000,
    bonus: 20000,
    sidehustle: "1000"
}

for( const revenue in incomes){
    console.log(incomes[revenue as keyof Incomes])
}

const age = 6
