// function add(n1: number, n2: number) {
//     return n1 + n2;
// }


// console.log(add(2,10))

let userName: string =  "rozr"

console.log(userName)




function zort(param1?: string) {
    
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

const copiedPerson = { ...person };

const add = (...numbers: number[]) => {
   return numbers.reduce((curResult, curValue) => {
        return curResult + curValue
    }, 0);
    ;
};

const addedNumber = add(5,10,2, 3.7);
console.log(addedNumber);

function str(s: string){
    return s.split("").reverse().join("");
}

const reverseStr = str("cool");

console.log(reverseStr)

class Department {

    constructor(public name: string, admins: string[]) {
        this.name = name;
    }
}

class ITDepartment extends Department {
    constructor(public name: string, public admins: string[]) {
        super(name, admins);
        this.admins = admins
    }
}

const accounting = new ITDepartment('d1', ['MAX']);

console.log(accounting)


interface Person {
    name: string;
    age: number;

    greet(phrase: string): void;
}

let user1: Person;

user1 = {
    name: 'zort',
    age: 12,
    greet(phrase: string) {
     console.log(phrase + '' + this.name)
    }
}

user1.greet('hi there i am ')

var emp:(number|string) = 123;

let sum = (x: number, y:number) => x + y;

const zortt = 'hello' as string;


