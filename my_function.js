// Function is block of code.

// we can call function before its defination
console.log(isEven(30)); // => true

// function declaration
function isEven(num) {
    return num % 2 === 0;
}
console.log(isEven(24)); // => true
console.log(isEven(11)); // => false
console.log(isEven.name); // isEven
console.log(typeof isEven); // function 

// regular function
function sum(value1, value2) {
    return value1 + value2;
}
console.log(sum(5, 6));           // => 11
console.log(([3, 7, 8, 6, 12]).reduce(sum)); // => 36
console.log(([3, 7, 8, 6, 12]).reduce(sum, 11)); // => 47
// array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
// currentIndex and arr is optional

// function expression
const hello = function(person){
    return "Hello "+person;
}
console.log(hello("Deepraj"));   // Hello Deepraj

// Function expression: an argument for .filter()
const numbers = ([1, false, 5]).filter(function(item) {
    return typeof item === 'number';
});
console.log(numbers);    // [1, 5]

// Function expression (IIFE): starts with "("
console.log(
    (function messageFunction(message) {
        return message + ' World!';
    })('Hello')
);              // Hello World
