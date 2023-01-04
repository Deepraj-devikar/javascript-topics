/**
In JavaScript, almost "everything" is an object.

Booleans can be objects (if defined with the new keyword)
Numbers can be objects (if defined with the new keyword)
Strings can be objects (if defined with the new keyword)
Dates are always objects
Maths are always objects
Regular expressions are always objects
Arrays are always objects
Functions are always objects
Objects are always objects
 */

// object are in key value pair 

const person = {
    firstName: "Deepraj",
    lastName: "Devikar",
    age: 25,
    fullName: function() {return this.firstName + " " + this.lastName;}
};

const person2 = {
    firstName: "Abhishek",
    lastName: "Solanki",
    age: 29,
    fullName: () => this.firstName + " " + this.lastName
}
const display = (person2) => console.log(person2.firstName + " " + person2.lastName);

console.log("/***************************CHECK");
display(person2);

console.log(person);
/**
{
  firstName: 'Deepraj',
  lastName: 'Devikar',
  age: 25,
  fullName: [Function: fullName]
}
 */

// we can change properties
person.age = 26;
console.log(person);
/**
{
  firstName: 'Deepraj',
  lastName: 'Devikar',
  age: 26,
  fullName: [Function: fullName]
}
 */

// accessing properties
console.log(person.fullName);
/**
[Function: fullName]
 */
console.log(person.fullName());
/**
Deepraj Devikar
 */
console.log(person2.fullName());
/**
undefined undefined
 */
console.log(person["fullName"]());
/**
Deepraj Devikar
 */

// we can delete property of object
delete person2.age;
console.log(person2);
/**
{
  firstName: 'Abhishek',
  lastName: 'Solanki',
  fullName: [Function: fullName]
}
 */

// nested object
person.car = {};
person.car.car1 = 'TATA Avinya';
person.car.car2 = 'Audi';
console.log(person);
/**
{
  firstName: 'Deepraj',
  lastName: 'Devikar',
  age: 26,
  fullName: [Function: fullName],
  car: { car1: 'TATA Avinya', car2: 'Audi' }
}
 */

// nested arrays and object
cars = person.car;
delete person.car;
person.cars = [];
person.cars.push({carName: "TATA Avinya", carType: 'EV'});
person.cars.push({carName: "Audi", carType: 'EV'});
console.log(person);
/**
{
  firstName: 'Deepraj',
  lastName: 'Devikar',
  age: 26,
  fullName: [Function: fullName],
  cars: [
    { carName: 'TATA Avinya', carType: 'EV' },
    { carName: 'Audi', carType: 'EV' }
  ]
}
 */

for (let carNumber in person.cars){
    console.log(person.cars[carNumber].carName+" type "+person.cars[carNumber].carType);
}
/**
TATA Avinya type EV
Audi type EV
 */