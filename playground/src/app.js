"use strict";
// function add(n1: number, n2: number) {
//     return n1 + n2;
// }
// console.log(add(2,10))
let userName = "rozr";
console.log(userName);
function zort(param1) {
}
// const addd = (a: number, b: number = 1) => a+b;
// console.log(addd(5))
// const object: string[] = ['sports', 'cooking'];
// const activeObject = ['hiking', ...object];
// activeObject.push(...object)
// console.log(object)
const person = {
    name: 'max',
    age: 30
};
const copiedPerson = Object.assign({}, person);
const add = (...numbers) => {
    return numbers.reduce((curResult, curValue) => {
        return curResult + curValue;
    }, 0);
    ;
};
const addedNumber = add(5, 10, 2, 3.7);
console.log(addedNumber);
function str(s) {
    return s.split("").reverse().join("");
}
const reverseStr = str("cool");
console.log(reverseStr);
class Department {
    constructor(name, admins) {
        this.name = name;
        this.name = name;
    }
}
class ITDepartment extends Department {
    constructor(name, admins) {
        super(name, admins);
        this.name = name;
        this.admins = admins;
        this.admins = admins;
    }
}
const accounting = new ITDepartment('d1', ['MAX']);
console.log(accounting);
let user1;
user1 = {
    name: 'zort',
    age: 12,
    greet(phrase) {
        console.log(phrase + '' + this.name);
    }
};
user1.greet('hi there i am ');
var emp = 123;
let sum = (x, y) => x + y;
const zortt = 'hello';
