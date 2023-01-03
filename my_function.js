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