// we can define class

class Deepraj {
    constructor(){
        this.personName = "Deepraj";
    }

    age = 25;
}

deepraj = new Deepraj();

console.log(deepraj);
/**
Deepraj { age: 25, personName: 'Deepraj' }
 */

// we can add padding to String
myPersonName = "Deepraj";
console.log(myPersonName.padStart(15, '-'));
/**
--------Deepraj
 */

myPersonName = "Deepraj";
console.log(myPersonName.padEnd(15, '-'));
/**
Deepraj--------
 */

// console.log(check); // RefferenceError: check is not defined 
// check = 5

console.log(3 ** 3); // 27

console.log(2 ** 2 ** 2); // 16

var list = ["one", "two", "three",] // It is valid

var obj = {
    one: "1",
    two: "2",
    three: "3", //  It is valid
}

function add(one, two, three,) // It is valid
{
    console.log(one + two + three);
}

console.log(list);
/**
[ 'one', 'two', 'three' ]
 */
console.log(obj);
/**
{ one: '1', two: '2', three: '3' }
 */
add(1, 2, 3); // 6

oneTwoThree_for_keys = Object.keys(obj).reduce((a, b) => a + b);
console.log(oneTwoThree_for_keys); // onetwothree
console.log(Object.keys(obj));
/**
[ 'one', 'two', 'three' ]
 */

oneTwoThree_for_values = Object.values(obj).reduce((a, b) => a + b);
console.log(oneTwoThree_for_values); // 123
console.log(Object.values(obj));
/**
[ '1', '2', '3' ]
 */

for(var [key, val] of Object.entries(obj)){
    console.log(key+" : "+val);
}
/**
one : 1
two : 2
three : 3
 */

console.log(Object.entries(obj));
/**
[ [ 'one', '1' ], [ 'two', '2' ], [ 'three', '3' ] ]
 */

// let have block scope
var x = 10;
console.log(x); // 10
{
    let x = 2;
    console.log(x); // 2
}
console.log(x); // 10

// const are for declaring constants
const a = 1;
// a = 2; // TypeError: Assignment to constant variable.

// arrow function came up with ES6
// Arrow functions do not have their own this. They are not well suited for defining object methods.
// Arrow functions are not hoisted. They must be defined before they are used.

// myArrowFunction() //TypeError: myArrowFunction is not a function
var myArrowFunction = () => console.log("I am arrow function");
myArrowFunction() // I am arrow function

// myAnonymousFunction() // TypeError: myAnonymousFunction is not a function
var myAnonymousFunction = function () {
    console.log("I am anonymous function");
}
myAnonymousFunction() // I am anonymous function

myNormalFunction(); // I am normal function
function myNormalFunction (){
    console.log("I am normal function");
}
myNormalFunction() // I am normal function

// function Using const is safer than using var, because a function expression is always a constant value.

const cars1 = ["Saab", "Volvo", "BMW"];
const cars2 = ["Saab", "Volvo", [..."BMW"]];
console.log(cars1); // [ 'Saab', 'Volvo', 'BMW' ]
console.log(cars2); // [ 'Saab', 'Volvo', [ 'B', 'M', 'W' ] ]
// ... spared operator expand eterable 
// example it will seperate every cahracter from string or can do every element seperate form list

// for/of loop
for (s of cars1){
    console.log(s);
}
/**
Saab
Volvo
BMW
 */

for (s2 in cars1){
    console.log(s2);
}
/**
0
1
2
 */

for (s3 of cars2){
    console.log(s3);
}
/**
Saab
Volvo
[ 'B', 'M', 'W' ]
 */

const fruits = new Map([
["apples", 500],
["bananas", 300],
["oranges", 200]
]);
console.log(fruits);
/**
Map(3) { 'apples' => 500, 'bananas' => 300, 'oranges' => 200 }
 */
// map store data in key value pairs

// Create a Set
const letters = new Set();

// Add some values to the Set
letters.add("a");
letters.add("b");
letters.add("c");
letters.add("b");

console.log(letters);
/**
Set(3) { 'a', 'b', 'c' }
 */
// Set stores distinct values

const myPromise = new Promise(function(myResolve, myReject) {
    setTimeout(function() { myResolve("I am executed"); }, 3000);
    myReject("I will not execute");
});

myPromise.then(function(value) {
    console.log(value);
})
.catch(function(error) {
    console.log(error);
});
// I will not execute
// after 3 seconds
// -------------------------------------------------------
const myPromise2 = new Promise(function(myResolve, myReject) {
    setTimeout(function() { myResolve("I am executed"); }, 3000);
});

myPromise2.then(function(value) {
    console.log(value);
});
// I am executed
// after 3 seconds
//--------------------------------------------------------------
// Symbol type
const newPerson = {
  firstName: "Chetak",
  lastName: "Maruti",
  age: 50,
  eyeColor: "blue"
};

let id = Symbol('id');
newPerson[id] = 140353;
// Now person[id] = 140353
// but person.id is still undefined
console.log(newPerson);
/**
{
  firstName: 'Chetak',
  lastName: 'Maruti',
  age: 50,
  eyeColor: 'blue',
  [Symbol(id)]: 140353
}
 */

console.log(id); // Symbol(id)

/**
A JavaScript Symbol is a primitive datatype just like Number, String, or Boolean.

It represents a unique "hidden" identifier that no other code can accidentally access.

For instance, if different coders want to add a person.id property to a person object belonging to a third-party code, they could mix each others values. */

// functions can have default values
function myFunction(x, y = 10) {
  // y is 10 if not passed or undefined
  return x + y;
}
myFunction(5); // will return 15

function spredFunction(...x){
    console.log(x);
}

spredFunction(1,2,3,4,5,6); // [ 1, 2, 3, 4, 5, 6 ]

function spredFunction2(a, b, ...x){
    console.log(a);
    console.log(b);
    console.log(x);
}

spredFunction2(1,2,3,4,5,6);
/**
1
2
[ 3, 4, 5, 6 ]
 */

// function spredFunction3(...x, a, b){
//     console.log(a);
//     console.log(b);
//     console.log(x);
// }

// spredFunction3(1,2,3,4,5,6); // SyntaxError: Rest parameter must be last formal parameter

let text = "Hello world, welcome to the universe.";
text.includes("world")    // Returns true
text.startsWith("Hello")   // Returns true
text.endsWith(".")    // Returns true

Array.from("ABCDEFG")   // Returns [A,B,C,D,E,F,G]

const numbers = [14, 2, 6, 8, 1, 9];
// console.log(numbers.find(8)); // TypeError: 8 is not a function
console.log(
    numbers.find(
        (number) => number % 2 == 0
    )
); // 14

console.log(
    numbers.findIndex(
        (number) => number % 2 == 0
    )
); // 0

// Math.trunc(x) returns the integer part of x:
console.log(Math.trunc(4.9));    // returns 4
console.log(Math.trunc(4.7));    // returns 4
console.log(Math.trunc(4.4));    // returns 4
console.log(Math.trunc(4.2));    // returns 4
console.log(Math.trunc(-4.2));    // returns -4

// Math.sign(x) returns if x is negative, null or positive:
console.log(Math.sign(-4));    // returns -1
console.log(Math.sign(0));    // returns 0
console.log(Math.sign(4));    // returns 1

// Math.cbrt(x) returns the cube root of x:
console.log(Math.cbrt(8));    // returns 2
console.log(Math.cbrt(64));    // returns 4
console.log(Math.cbrt(125));    // returns 5

// Math.log2(x) returns the base 2 logarithm of x:
console.log(Math.log2(2));    // returns 1

// Math.log10(x) returns the base 10 logarithm of x:
console.log(Math.log10(10));    // returns 1

console.log("***************************************************************");
let epsilon = Number.EPSILON;
console.log(epsilon); // 2.220446049250313e-16

let minSafeInteger = Number.MIN_SAFE_INTEGER;
console.log(minSafeInteger); // -9007199254740991

let maxSafeInteger = Number.MAX_SAFE_INTEGER;
console.log(maxSafeInteger); // 9007199254740991

Number.isInteger(10);        // returns true
Number.isInteger(10.5);      // returns false

Number.isSafeInteger(10);    // returns true
Number.isSafeInteger(12345678901234567890);  // returns false

isFinite(10/0);       // returns false
isFinite(10/1);       // returns true

// in JS 2016
const fruits2 = ["Banana", "Orange", "Apple", "Mango"];

fruits2.includes("Mango"); // true