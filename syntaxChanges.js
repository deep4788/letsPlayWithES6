#!/usr/bin/env node
"use strict";

//let keyword lets you define block scope variable
{
    let localVar = 4;
}
try {
    console.log(localVar);
}
catch(err) {
    console.error("ERROR: ", err.message);
}

//const keyword lets you define constant variable
const constantVar = 4;
try {
    constantVar = 5;
}
catch(err) {
    console.error("ERROR: ", err.message);
}

//Arrow Functions
const fn = (arg1, arg2) => (arg1 + arg2);
console.log(fn(2,3));

//Rest & Spread Operators (...)
function sumThem(...toBeAdd) {
    let res = 0;
    for(let i=0; i< toBeAdd.length; i++) {
        res += toBeAdd[i];
    }
    return res;
}
console.log(sumThem(1,2,3));

let numbers = [13, 233, 3, 43, 53, 6];
console.log(Math.max(...numbers));

//For-of Loop
let testResults = [5.3, 2.8, 9.1, 1.0, 3.9];
for(let tRes of testResults) {
    if(tRes > 6) {
        console.log(tRes);
    }
}

//Template Literals
let name = "Deep";
let myDesc = `My name is ${name}.`;
console.log(myDesc);

//Destructuring
let names = ["deep", "chris", "mike"];
let [first, second] = names;
let [,, third] = names;
console.log(`${first}, ${second} and ${third}`);

let person = {
    myname: "Deep",
    age: 28
};
let {myname, age} = person;
console.log(`My name is ${myname} and my age is ${age}`);
