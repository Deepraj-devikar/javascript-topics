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