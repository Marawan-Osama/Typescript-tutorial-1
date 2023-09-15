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
const year = document.getElementById("year") as HTMLSpanElement
const thisYear: string = new Date().getFullYear().toString()
year.setAttribute("datetime", thisYear)
year.textContent = thisYear