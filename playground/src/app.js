"use strict";
function InnerHtml(template, hookID) {
    return function (constructor) {
        const hookEl = document.getElementById(hookID);
        let currentDate = new Date().toJSON().slice(11, 19);
        if (hookEl) {
            hookEl.innerHTML = template;
            hookEl.querySelector('h1').textContent = "time = " + currentDate;
        }
    };
}
setInterval(InnerHtml('<h1></h1>', 'zort'), 1000);
class istsme {
    constructor() {
        this.name = 'Max';
        console.log('creating a new person object...');
    }
}
const e1 = {
    name: 'Max',
    privileges: ['create-server'],
    startDate: new Date()
};
function add(a, b) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
function printEmployeeInformation(emp) {
    console.log('Name: ' + emp.name);
    if ('privileges' in emp) {
        console.log('Privileges: ' + emp.privileges);
    }
    if ('startDate' in emp) {
        console.log('Start Date: ' + emp.startDate);
    }
}
printEmployeeInformation({ name: 'Manu', startDate: new Date() });
class Car {
    drive() {
        console.log('Driving...');
    }
}
class Truck {
    drive() {
        console.log('Driving a truck...');
    }
    loadCargo(amount) {
        console.log('Loading cargo ...' + amount);
    }
}
const v1 = new Car();
const v2 = new Truck();
function useVehicle(vehicle) {
    vehicle.drive();
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(1000);
    }
}
useVehicle(v1);
useVehicle(v2);
function moveAnimal(animal) {
    let speed;
    switch (animal.type) {
        case 'bird':
            speed = animal.flyingSpeed;
            break;
        case 'horse':
            speed = animal.runningSpeed;
    }
    console.log('Moving at speed: ' + speed);
}
moveAnimal({ type: 'bird', flyingSpeed: 10 });
// const userInputElement = <HTMLInputElement>document.getElementById('user-input')!;
const userInputElement = document.getElementById("userinput");
userInputElement.value = "hi there!";
const beesandlamers = {
    bees: ["zort", "kert", "fert"],
    lamers: ["pert", "fort", "arorta"]
};
const mapBeesandLamers = beesandlamers.bees;
console.log(mapBeesandLamers);
const sweetArray = [1, 2, 3, 4, 5];
sweetArray.push("zort");
console.log(sweetArray);
const errorbag = {
    email: 'not a valid email!',
    username: 'must start with capital letter'
};
function cubesofN(n) {
    return Math.pow(n, 3);
}
console.log(cubesofN(4));
const names = ["max"];
names[0].split('');
function printAndCount(element) {
    let descriptionText = "Got no value";
    if (element.length === 1) {
        descriptionText = "Got 1 element";
    }
    else if (element.length > 1) {
        descriptionText = 'Got' + element.length + 'elements';
    }
    return [element, descriptionText];
}
